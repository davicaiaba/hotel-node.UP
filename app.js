const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");

const rotaPrincipal = require("./app/routes/router");
app.use("/", rotaPrincipal);

const rotaAdm = require("./app/routes/router-adm");
app.use("/adm", rotaAdm);

app.listen(port, ()=>{
    console.log(`Servidor onLine!\nhttp://localhost:${port}`);
})