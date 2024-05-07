const axios = require("axios");
const apiKey = require("../apiKey");

async function accountPuuid(puuid){
    try{
        const response = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${apiKey}`);
        if(response.status === 200){
            const accountPuuidData = response.data
            return accountPuuidData;
        }else{
            throw new Error(`API accountPuuid failed with status: ${response.status}`);
        }
    }catch{
        console.error('Error:', error.message);
    };
};

module.exports = accountPuuid;

// var puuid = '3mNC2hADwrKhQ8DwsM7htBrGjeUxGkUKPKjyLajDZZ96XnVWQmnnLU_EuFvf4gpGhtWheE3qPWwl2A';
// accountPuuid(puuid).then(teste =>{
//     console.log(teste);
// })

//Resultado
// {
//     puuid: '3mNC2hADwrKhQ8DwsM7htBrGjeUxGkUKPKjyLajDZZ96XnVWQmnnLU_EuFvf4gpGhtWheE3qPWwl2A',
//     gameName: 'João né vida',
//     tagLine: 'ジョン'
// }