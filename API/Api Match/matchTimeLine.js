const axios = require("axios");
const apiKey = require("../apiKey");

async function matchTimeLine(matchId){
    try{
        const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}/timeline?api_key=${apiKey}`);
        
        if(response.status === 200){
            const matchTimeLineData = response.data;
            return matchTimeLineData;
        }else{
            throw new Error(`API matchTimeLine failed with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = matchTimeLine;

//Teste
// var matchId = 'BR1_2930571427'
// matchTimeLine(matchId).then(teste =>{
//     console.log(teste);
// })