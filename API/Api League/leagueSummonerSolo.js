const axios = require("axios");
const apiKey = require("../apiKey")

async function leagueSummonerSolo(summonerId){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`);
        if(response.status === 200){
            const validarSoloq = response.data[0];
            const validarFlex = response.data[1];
            if(validarSoloq != undefined){
                if(validarSoloq.queueType === 'RANKED_SOLO_5x5' ){
                    var soloq = validarSoloq
                    return soloq
                }else{
                    var soloq = validarFlex;
                    return soloq
                }
            }else{
                var unranked = "unranked"
                return unranked;
            }
        }else{
            throw new Error(`API leagueSummoner failed with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = leagueSummonerSolo;

//Teste
// var summonerId = 'A8Zbe5kvJqPGgL_6B-HKoTtRQbnZH8AwKWGPuijLiBWoC_A';
// leagueSummonerSolo(summonerId).then(teste => {
//     console.log(teste);
// })

//Resultado
// {
//     leagueId: '897cb1ba-cf86-4d2d-adc6-b052523961fd',
//     queueType: 'RANKED_SOLO_5x5',
//     tier: 'DIAMOND',
//     rank: 'I',
//     summonerId: 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA',
//     leaguePoints: 49,
//     wins: 20,
//     losses: 15,
//     veteran: false,
//     inactive: false,
//     freshBlood: false,
//     hotStreak: false
// }