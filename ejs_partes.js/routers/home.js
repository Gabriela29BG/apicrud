const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {

    res.render('index')
});



router.get("/deshboard", (req, res) => {
    //res.sendFile("Dashboard page") //esta linea es la anterior
    res.rerder('dashboard') //no es texto es el nombre del archivo
 });

module.exports = routera;