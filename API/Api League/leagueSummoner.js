const axios = require("axios");
const apiKey = require("../apiKey")

async function leagueSummoner(summonerId){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`);
        if(response.status === 200){
            const leagueSummonerData = response.data
            return leagueSummonerData;
        }else{
            throw new Error(`API leagueSummoner failed with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = leagueSummoner;

//Teste
// var summonerId = 'kAibUvMbCgnctiFM0QWbk7_T6t5ycWR04XXb9-kDRpIJ_w';
// leagueSummoner(summonerId).then(teste => {
//     console.log(teste);
// })

//Resultado
// [
//     {
//       leagueId: '897cb1ba-cf86-4d2d-adc6-b052523961fd',
//       queueType: 'RANKED_SOLO_5x5',
//       tier: 'DIAMOND',
//       rank: 'I',
//       summonerId: 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA',
//       leaguePoints: 49,
//       wins: 20,
//       losses: 15,
//       veteran: false,
//       inactive: false,
//       freshBlood: false,
//       hotStreak: false
//     },
//     {
//       leagueId: 'e6fb79bc-c754-4265-8462-29647bc761fd',
//       queueType: 'RANKED_FLEX_SR',
//       tier: 'DIAMOND',
//       rank: 'IV',
//       summonerId: 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA',
//       leaguePoints: 43,
//       wins: 86,
//       losses: 77,
//       veteran: false,
//       inactive: false,
//       freshBlood: false,
//       hotStreak: false
//     }
//   ]