const axios = require("axios");
const apiKey = require("../apiKey");

async function spectatorPuuid(puuid){
    try{
        const response = await axios.get(`https://br1.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}?api_key=${apiKey}`);
        if(response.status === 200){
            const spectatorPuuidData = response.data;
            return spectatorPuuidData;
        }else{
            throw new Error(`API spectatorPuuid failed with status: ${response.status}`);
        }
    }catch(error){
        console.error('Error:', error.message);
    }
}

module.exports = spectatorPuuid;

//Teste
// var puuid = '3mNC2hADwrKhQ8DwsM7htBrGjeUxGkUKPKjyLajDZZ96XnVWQmnnLU_EuFvf4gpGhtWheE3qPWwl2A'
// spectatorPuuid(puuid).then(teste =>{
//     console.log(teste);
// })

//Resultado
// {
//     gameId: 2931401927,
//     mapId: 11,
//     gameMode: 'CLASSIC',
//     gameType: 'MATCHED',
//     gameQueueConfigId: 420,
//     participants: [
//       {
//         puuid: '3mNC2hADwrKhQ8DwsM7htBrGjeUxGkUKPKjyLajDZZ96XnVWQmnnLU_EuFvf4gpGhtWheE3qPWwl2A',
//         teamId: 100,
//         spell1Id: 4,
//         spell2Id: 11,
//         championId: 64,
//         profileIconId: 6381,
//         riotId: 'João né vida#ジョン',
//         bot: false,
//         summonerId: 'tIHmvfCmaVtCSmkvM16Nb_qPhdj0nSfgKLFxgdbdaP0xHA',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'nkQ1fBG2aqfVIwpB8SLBSGtb5ZekyD0Jx0JQHvyf3EKN8RW_UiMrT3RyP-am91MZY3GlHlggxqdRxg',
//         teamId: 100,
//         spell1Id: 6,
//         spell2Id: 4,
//         championId: 29,
//         profileIconId: 3607,
//         riotId: 'ÉL HIPER CARRY#Carry',
//         bot: false,
//         summonerId: 'rThNG3OjuVvsZAbAEZuLCvG9Zs8RPyjh8OyDxO-9LYNyDno',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'bnrrqSsaZLEASpb1rmpD9XgGi6xKCUn3a3RxCrqQdZGraThnQKzGlgdCIgBLMZp43ap7qdWROVRGXQ',
//         teamId: 100,
//         spell1Id: 3,
//         spell2Id: 4,
//         championId: 117,
//         profileIconId: 1211,
//         riotId: 'lucasmestri#BR1',
//         bot: false,
//         summonerId: 'Ho9roGFUHBvkVD7o50KauFftDKDpOVdcvX429TKGbKuphd8',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'MWV1MSYvGos8IVRmLg1rxyWwMNz-Jxumo9bzdgCKAEYhd65wBJqBv5nTAoxPCD2EgBRfgf1KZK0iUw',
//         teamId: 100,
//         spell1Id: 4,
//         spell2Id: 12,
//         championId: 777,
//         profileIconId: 903,
//         riotId: 'Soninho1#ZZZZz',
//         bot: false,
//         summonerId: 'wU0FFLPWiTd6le_ZkHJMo_zERlXgRgCGWhkb-Ky3tsYIcVk',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'nSkxaensO4a15S_nOCC8M-BMTh829bL2zBM11Tl9JGM_rHXrXRfwoiCdY7eFHA3WkAnhjTg6H2g2RA',
//         teamId: 100,
//         spell1Id: 6,
//         spell2Id: 4,
//         championId: 8,
//         profileIconId: 6582,
//         riotId: 'Yazeyn#157',
//         bot: false,
//         summonerId: 'DkALjL_QMM4twC4rGRLLdK2F2kOs4E0ZkfcIPs5aGrje6Zg',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'czZhZxAEP2q148Id8HpKQnPh-nIeigoMbWRjfOTVr3VmALSAVxKJAi64B4jn6h1o87qQ_Xg6mq1A1A',
//         teamId: 200,
//         spell1Id: 4,
//         spell2Id: 11,
//         championId: 163,
//         profileIconId: 6578,
//         riotId: 'Goenji#IN11',
//         bot: false,
//         summonerId: 'rlXsrlnH9tiefAutSMnEmNvWJMEqDjyPy7sGIK3Sa6a5iQ',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'WU-fMDyqh0SSChhpKqZRn3VBibXnq1qEBCJolLyRg7_p3Ps8vI44No0Z-lA40t-fxp6mFgdwRGlRtg',
//         teamId: 200,
//         spell1Id: 3,
//         spell2Id: 4,
//         championId: 267,
//         profileIconId: 3380,
//         riotId: 'Aldhun#4192',
//         bot: false,
//         summonerId: 'xu-mbrdISD5mU4Q4YYoiJ5elUhqy0fFeuzo2rlaA1MDyg10',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'Qvo6JZo_RDFoilU3HfnIUb_Rtu8x7hnr6g4ZqjByNR0QBDLJZsSVRPYBHK_gQ9wC4d7eDiA7eRQy7Q',
//         teamId: 200,
//         spell1Id: 4,
//         spell2Id: 6,
//         championId: 79,
//         profileIconId: 4552,
//         riotId: 'NewArticWolf#Br011',
//         bot: false,
//         summonerId: '5fGsspIKykk61an-etBjBiRezf-K3J5OrOGPYzJmlVygz_I',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'Pe04Y6pJ8yBxZgnq5eMtJzDLPq58Pv9Ji7qAtmZ48-i8fdHoV5jD5pnRaaHGGf2jkKv463UXwBbypA',
//         teamId: 200,
//         spell1Id: 4,
//         spell2Id: 6,
//         championId: 122,
//         profileIconId: 29,
//         riotId: 'dariusxxl#rank1',
//         bot: false,
//         summonerId: 'FISH_cNzODsT8RSxd6lvbcPlA8bSvTOXHaxskb195NHf8Hg',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       },
//       {
//         puuid: 'IdNkb1G29cpr0zqob4kEcxsirV3C0q2ytRVVEwXOn5sJf1rZjT7XvsIokcW_4NcJZD5rQ1E-GHawrQ',
//         teamId: 200,
//         spell1Id: 4,
//         spell2Id: 6,
//         championId: 51,
//         profileIconId: 3456,
//         riotId: '켄지 Uzi#Mirna',
//         bot: false,
//         summonerId: '82ZxULGa7thqnh3RHf33YgAcM_g5VZ7AjoDGd-W4KnNETg',
//         gameCustomizationObjects: [],
//         perks: [Object]
//       }
//     ],
//     observers: { encryptionKey: 'Vj2Yu9yzRTTJaL4JRnt4AjvTHkgIzshu' },
//     platformId: 'BR1',
//     bannedChampions: [
//       { championId: 80, teamId: 100, pickTurn: 1 },
//       { championId: 200, teamId: 100, pickTurn: 2 },
//       { championId: 157, teamId: 100, pickTurn: 3 },
//       { championId: 902, teamId: 100, pickTurn: 4 },
//       { championId: 84, teamId: 100, pickTurn: 5 },
//       { championId: 555, teamId: 200, pickTurn: 6 },
//       { championId: 11, teamId: 200, pickTurn: 7 },
//       { championId: 111, teamId: 200, pickTurn: 8 },
//       { championId: 266, teamId: 200, pickTurn: 9 },
//       { championId: 910, teamId: 200, pickTurn: 10 }
//     ],
//     gameStartTime: 1714493352819,
//     gameLength: -51
//   }