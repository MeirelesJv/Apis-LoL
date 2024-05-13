# Api LoL

![GitHub Actions Workflow Status](https://img.shields.io/badge/Status-Progress-green)
![GitHub package.json version](https://img.shields.io/badge/Version-1.2-blue)

Este projeto pretende adentrar no mundo das APIs da Riot Games, investigando minuciosamente cada uma delas e empregando-as como instrumentos para análises e pesquisas detalhadas. Por meio de uma abordagem ampla e sistemática, explorar suas capacidades e evidenciar seu potencial para variadas aplicações.

## Dependencias

### Bibliotecas

<ul>
<li>EJS</li>
<li>Body-parser</li>
<li>Axios</li>
<li>slugify</li>
</ul>

### Frameworks

<ul>
<li>Nodemon</li>
<li>Express</li>
</ul>

### Apis ```GET``` 
```bash
  /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}
  /riot/account/v1/accounts/by-puuid/{puuid}
  /lol/match/v5/matches/by-puuid/{puuid}/ids
  /lol/match/v5/matches/{matchId}
  /lol/match/v5/matches/{matchId}/timeline 
  /lol/spectator/v5/active-games/by-summoner/{encryptedPUUID} 
  /lol/spectator/v5/featured-games
  /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}
  /lol/summoner/v4/summoners/{encryptedSummonerId} 
  /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine} 
  /riot/account/v1/accounts/by-puuid/{puuid}
```

## Configurações

### Api Key

Para acessar as Apis da Riot será necessario uma key, exigida pela riot para acessar as Apis, essa key é disponibilizada no proprio site da <a href="https://developer.riotgames.com/apis">Riot</a>. Como essa Key é valida por apenas 24 horas, na pasta *Apis-LoL-main\API\apiKey.js* está o module que disponibiliza a key para o resto do código

### Start

Basta iniciar o arquivo .bat que ele já estava funcionando no <a href="http://localhost:8080/">Local</a>

## Desenvolvimentos Futuro

<ul>
<li>Busca por Região</li>
  <ul>
    <li>KR</li>
    <li>NA</li>
    <li>EUW</li>
    <li>EUN</li>
    <li>KR</li>
    <li>JP</li>
    <li>RU</li>
    <li>OCE</li>
  </ul>
<li>Aumentar os jogos</li>
  <ul>
    <li>Valorant</li>
    <li>TFT</li>
    <li>League of Runeterra</li>
  </ul>
  <li>Melhorias na Interface</li>
</ul>
