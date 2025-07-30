const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("pages/index");
});

router.get("/login", (req, res)=>{
    res.render("pages/login");
} )

router.get("/cadastro", (req, res)=>{
    res.render("pages/cadastro")
})

router.get("/perfil", (req, res)=>{
    res.render("pages/perfil")
})


module.exports = router