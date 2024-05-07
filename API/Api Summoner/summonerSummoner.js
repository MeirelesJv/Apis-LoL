const axios = require("axios");
const apiKey = require("../apiKey");

async function summonerSummoner(summonerId){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${apiKey}`);
        if(response.status === 200){
            const summonerSummonerData = response.data
            return summonerSummonerData;
        }else{
            throw new Error(`API summonerSummoner failed with status: ${response.status}`);
        }
    }catch{
        console.error('Error:', error.message);
    };
};

module.exports = summonerSummoner;

//Testando
// var summonerId = 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA';
// summonerSummoner(summonerId).then(teste =>{
//     console.log(teste);
// })

//Resultado
// {
//     id: 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA',
//     accountId: 'sceZ8SXAatf_va-diKotmmTxEwhJxy2NClRhCO_A-YS5rUA',
//     puuid: '3mNC2hADwrKhQ8DwsM7htBrGjeUxGkUKPKjyLajDZZ96XnVWQmnnLU_EuFvf4gpGhtWheE3qPWwl2A',
//     profileIconId: 6381,
//     revisionDate: 1714490501409,
//     summonerLevel: 448
// }