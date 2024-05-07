const axios = require("axios");
const apiKey = require("../apiKey")

async function leagueSummonerFlex(summonerId){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`);
        if(response.status === 200){
            const validarSoloq = response.data[0];
            const validarFlex = response.data[1];
            if(validarFlex != undefined){
                if(validarSoloq.queueType === 'RANKED_SOLO_5x5' ){
                    var flex = validarFlex
                    return flex
                }else{
                    var flex = validarSoloq;
                    return flex
                }
            }else{
                var unranked = "unranked"
                return unranked;
            }
        }else{
            throw new Error(`API leagueSummonerFlex failed with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = leagueSummonerFlex;

//Teste
// var summonerId = 'kAibUvMbCgnctiFM0QWbk7_T6t5ycWR04XXb9-kDRpIJ_w';
// leagueSummonerFlex(summonerId).then(teste => {
//     console.log(teste);
// })

//Resultado
// {
//     leagueId: 'e6fb79bc-c754-4265-8462-29647bc761fd',
//     queueType: 'RANKED_FLEX_SR',
//     tier: 'DIAMOND',
//     rank: 'IV',
//     summonerId: 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA',
//     leaguePoints: 43,
//     wins: 86,
//     losses: 77,
//     veteran: false,
//     inactive: false,
//     freshBlood: false,
//     hotStreak: false
// }