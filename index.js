const express = require("express");
const app = express();
const bodyParse = require("body-parser");

app.listen(8080,()=>{console.log("Servidor Iniciado")});

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.set('view engine','ejs');

app.use(express.static('public'));

const controllerHome = require("./router/Home/controllerHome");
app.use("/", controllerHome);