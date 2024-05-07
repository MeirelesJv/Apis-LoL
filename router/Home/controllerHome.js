const express = require("express");
const router = express.Router();
const slugify = require("slugify");
//Apis
const accountNick = require("../../API/Api Account/accountNick");
const summonerPuuid = require("../../API/Api Summoner/summonerPuuid");
const accountPuuid = require("../../API/Api Account/accountPuuid");
const leagueSummonerFlex = require("../../API/Api League/leagueSummonerFlex");
const leagueSummonerSolo = require("../../API/Api League/leagueSummonerSolo");
const matchInf = require("../../API/Api Match/matchInf");
const matchPuuid = require("../../API/Api Match/matchPuuid");

router.get("/",(req,res)=>{
    res.render("home")
});

function separarNick(nick){
    const regex = /^(.*)#(.*)$/;
    const match = regex.exec(nick);
    return match;
}

class player{
    constructor(gameName,tagLine,puuid,summonerId,profileIconId,summonerLevel,tierSolo,rankSolo,leaguePointsSolo,winsSolo,lossesSolo,tierFlex,rankFlex,leaguePointsFlex,winsFlex,lossesFlex){
        this.gameName = gameName;
        this.tagLine = tagLine;
        this.puuid = puuid;
        this.summonerId = summonerId;
        this.profileIconId = profileIconId;
        this.summonerLevel = summonerLevel;
        this.tierSolo =  tierSolo;
        this.rankSolo = rankSolo;
        this.leaguePointsSolo = leaguePointsSolo;
        this.winsSolo = winsSolo;
        this.lossesSolo = lossesSolo;
        this.tierFlex =  tierFlex;        
        this.rankFlex = rankFlex;
        this.leaguePointsFlex = leaguePointsFlex;
        this.winsFlex = winsFlex;
        this.lossesFlex = lossesFlex;
    }
    
};

async function playerHome(puuid){
    try{
        const summonerPuuidElo = await summonerPuuid(puuid); //summoner:id,accountId,puuid,profileIconId,summonerLevel
        const AccountPuuidElo = await accountPuuid(puuid);
        const leagueSummonerFlexElo = await leagueSummonerFlex(summonerPuuidElo.id);
        const leagueSummonerSoloElo = await leagueSummonerSolo(summonerPuuidElo.id);
        var playerSet = new player(AccountPuuidElo.gameName ,AccountPuuidElo.tagLine ,AccountPuuidElo.puuid ,summonerPuuidElo.id ,summonerPuuidElo.profileIconId ,summonerPuuidElo.summonerLevel,
        leagueSummonerSoloElo.tier ,leagueSummonerSoloElo.rank ,leagueSummonerSoloElo.leaguePoints ,leagueSummonerSoloElo.wins ,leagueSummonerSoloElo.losses ,
        leagueSummonerFlexElo.tier ,leagueSummonerFlexElo.rank ,leagueSummonerFlexElo.leaguePoints ,leagueSummonerFlexElo.wins ,leagueSummonerFlexElo.losses)
        return playerSet;
    }catch(error){
        console.log("Error na func Elo")
    }
}

let matchs;
let summonerHome;
let homePuuid;
router.post("/home/Nick",async (req,res) =>{
    let gameName = separarNick(req.body.nick)[1]
    let tagLine = separarNick(req.body.nick)[2]
    var slug = slugify(gameName)+"-"+tagLine
    try{
        let accountPuuid = await accountNick(gameName,tagLine);
        homePuuid = accountPuuid.puuid;
        summonerHome = await playerHome(accountPuuid.puuid);
        matchs = await matchPuuid(accountPuuid.puuid);
        res.redirect(`/LoL/${slug}`);
    }catch(error){
        console.log("Error",error);
        res.redirect("/");
    }
});

router.get("/LoL/:slug",async (req,res)=>{
    async function getGamesData() {
        const games = [];
        for (let i = 0; i < matchs.length; i++) {
          const gameData = await matchInf(matchs[i],homePuuid);
          games.push(gameData);
        }
        return games;
      }
      const allGames = await getGamesData();
    
    res.render("summoner",{summonerHome: summonerHome,games: allGames});
})

module.exports = router;