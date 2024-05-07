const axios = require("axios");
const apiKey = require("../apiKey");

async function matchInf(matchId,puuid){
    try{
        const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`);
        if(response.status === 200){
            const matchInfoData = response.data;
            const allPlayers = [];
            for (let i = 0; i < matchInfoData.info.participants.length; i++) {
            const participant = matchInfoData.info.participants[i];
            const cs = participant.neutralMinionsKilled + participant.totalMinionsKilled
            const me = participant.puuid === puuid;

            function convertSecondsToMinutesAndSeconds(totalSeconds) {
                const minutes = Math.floor(totalSeconds / 60);
                const remainingSeconds = totalSeconds % 60;
                return `${minutes}m ${remainingSeconds}s`;
            }
            const totalSeconds = matchInfoData.info.gameDuration;
            const formattedDuration = convertSecondsToMinutesAndSeconds(totalSeconds);
              
            const player = {
                queueId: matchInfoData.info.queueId,
                champLevel: participant.champLevel,
                teamId: participant.teamId,
                championId: participant.championId,
                championName: participant.championName,
                assists: participant.assists,
                deaths: participant.deaths,
                kills: participant.kills,
                lane: participant.teamPosition,
                puuid: participant.puuid,
                GameName: participant.riotIdGameName + '#' + participant.riotIdTagline,
                summonerId: participant.summonerId,
                totalMinionsKilled: cs,
                win: participant.win,
                me: me,
                time: formattedDuration,
                item0: participant.item0,
                item1: participant.item1,
                item2: participant.item2,
                item3: participant.item3,
                item4: participant.item4,
                item5: participant.item5,
                item6: participant.item6,
                fristRune0: participant.perks.styles[0].selections[0].perk,
                fristRune1: participant.perks.styles[0].selections[1].perk,
                fristRune2: participant.perks.styles[0].selections[2].perk,
                fristRune3: participant.perks.styles[0].selections[3].perk,
                secondRune0: participant.perks.styles[1].selections[0].perk,
                secondRune1: participant.perks.styles[1].selections[1].perk,
            };

            // Assign role based on 'lane' property
            if (player.lane === 'TOP') {
                player.role = 0;
            } else if (player.lane === 'JUNGLE') {
                player.role = 2;
            } else if (player.lane === 'MIDDLE') {
                player.role = 3;
            } else if (player.lane === 'BOTTOM') {
                player.role = 4;
            } else if (player.lane === 'UTILITY') {
                player.role = 5;
            }

            allPlayers.push(player);
            }

            return allPlayers;

        }else{
            throw new Error(`API request failed MatchInfo with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}
 
// matchInf("BR1_2934426336","CrBXSnDB47wujVoLjGI_g1T_QzFgyP0wSkfB2-HxczTu8yEBMCnI9RhAZ959i-mgToOG4eKvIlRsOw").then(teste=>{
//     console.log(teste);
// })

module.exports = matchInf;