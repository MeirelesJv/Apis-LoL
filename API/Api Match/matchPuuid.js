const axios = require("axios");
const apiKey = require("../apiKey");

async function matchPuuid(puuid){
    try{
        const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=20&api_key=${apiKey}`);
        if(response.status === 200){
            const matchPuuidData = response.data;
            return matchPuuidData;
        }else{
            throw new Error(`API matchPuuid failed with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = matchPuuid;

//teste
// var puuid = 'KnAkuQfqh6-w8bIUYzykY5c6U5Uv7ufmns4RK98RgKe6mrZIr2J0TLDlXqFRBT2NnfpThne-skoLGQ'
// matchPuuid(puuid).then(teste =>{
//     console.log(teste);
// })

//Resultado
// [
//     'BR1_2930420973', 'BR1_2930177600',
//     'BR1_2930155875', 'BR1_2930135236',
//     'BR1_2930114551', 'BR1_2929640591',
//     'BR1_2929621645', 'BR1_2929615168',
//     'BR1_2929600801', 'BR1_2929588302',
//     'BR1_2928696741', 'BR1_2928669227',
//     'BR1_2928665134', 'BR1_2906176167',
//     'BR1_2906131854', 'BR1_2906102548',
//     'BR1_2906061001', 'BR1_2905955541',
//     'BR1_2905929159', 'BR1_2905921494'
// ]