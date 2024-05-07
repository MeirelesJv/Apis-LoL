const axios = require("axios");
const apiKey = require("../apiKey");

async function spectatorFeatured(){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/spectator/v5/featured-games?api_key=${apiKey}`);
        
        if(response.status === 200){
            const spectatorFeaturedData = response.data;
            return spectatorFeaturedData;
        }else{
            throw new Error(`API spectatorFeatured failed MatchInfo with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = spectatorFeatured;

//Teste'
// spectatorFeatured().then(teste =>{
//     console.log(teste);
// })