# Api Nick

![GitHub Actions Workflow Status](https://img.shields.io/badge/Status-Progress-green)
![GitHub package.json version](https://img.shields.io/badge/Version-1.2-blue)

Este projeto pretende adentrar no mundo das APIs da Riot Games, investigando minuciosamente cada uma delas e empregando-as como instrumentos para análises e pesquisas detalhadas. Por meio de uma abordagem ampla e sistemática, explorar suas capacidades e evidenciar seu potencial para variadas aplicações.

## Dependencias

### Bibliotecas

<ul>
<li>EJS => Permite incorporar código JavaScript em arquivos HTML.</li>
<li>Body-parser => Ele extrai esses dados recebidos pelo POST e os torna acessíveis no objeto req.body.</li>
<li>Axios => Requisições HTTP em aplicações web</li>
</ul>

### Frameworks

<ul>
<li>Nodemon => Reinicia o servidor sempre que realizar alguma mudança no codigo.</li>
<li>Express => Lidar com Rotas HTTP.</li>
</ul>

### Apis

```GET``` /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine} => Get account by riot id<br>
```GET``` /riot/account/v1/accounts/by-puuid/{puuid} => Get account by puuid<br>
```GET``` /lol/match/v5/matches/by-puuid/{puuid}/ids => Get a list of match ids by puuid<br>
```GET``` /lol/match/v5/matches/{matchId} => Get a match by match id<br>
```GET``` /lol/match/v5/matches/{matchId}/timeline => Get a match timeline by match id<br>
```GET``` /lol/spectator/v5/active-games/by-summoner/{encryptedPUUID} => Get current game information for the given puuid<br>
```GET``` /lol/spectator/v5/featured-games => Get list of featured games<br>
```GET``` /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID} => Get a summoner by PUUID<br>
```GET``` /lol/summoner/v4/summoners/{encryptedSummonerId} => Get a summoner by summoner ID<br>

```GET``` /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine} => Obter conta por riot id
```GET``` /riot/account/v1/accounts/by-puuid/{puuid} => Obter conta por puuid
>>>>>>> 0de4f43f189041c82135276ec6e008747ea658bb

