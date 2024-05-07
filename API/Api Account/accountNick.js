const axios = require("axios");
const apiKey = require("../apiKey")

async function accountNick(gameName, tagLine){
    try{
        const response = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`);

        if(response.status === 200){
            const accountNickData = response.data;
            return accountNickData;
        }else{
            throw new Error(`API accountNick failed with status: ${response.status}`);
        }
    }catch{
        console.error('Error: Api validade', error.message);
    }   
};

module.exports = accountNick;

//Teste
// const gameName = 'Black Mister';
// const tagLine = 'BR1'; 
// accountNick(gameName, tagLine).then(teste =>{
//     console.log(teste)
// })

//Resultado da Api
// {
//     puuid: '3mNC2hADwrKhQ8DwsM7htBrGjeUxGkUKPKjyLajDZZ96XnVWQmnnLU_EuFvf4gpGhtWheE3qPWwl2A',
//     gameName: 'Black Mister',
//     tagLine: '#BR1'
// }