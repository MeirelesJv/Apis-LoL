const axios = require("axios");
const apiKey = require("../apiKey");

async function summonerPuuid(puuid){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`);
        if(response.status === 200){
            const summonerPuuidData = response.data
            return summonerPuuidData;
        }else{
            throw new Error(`API summonerPuuid failed with status: ${response.status}`);
        }
    }catch{
        console.error('Error:', error.message);
    };
};

module.exports = summonerPuuid;

//Testando
// var puuid = 'cmGPkgRZeNGqNk2yngFhIolwDnQGjmvp9A8AU8T3hVcTUyDjABlyzyRt6-b0__sWfgdybr8k7BtAEQ';
// summonerPuuid(puuid).then(teste =>{
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