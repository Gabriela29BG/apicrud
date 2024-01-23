const { Router } = require("express");

const router = Router();

router.all("/about", (req, res) => {

    const title = 'mi pagina creada desde express' //querenos visualizar esta etiqueta

    res.render('index',{title})//le pasamos el valor que regresa
    // y la etqueta se la pasamos entre corchetes, tambien se debe envolver la etiqueta entre simbolos pero en archivo html
});



router.get("/deshboard", (req, res) => {
    //res.sendFile("Dashboard page") //esta linea es la anterior
    res.rerder('dashboard') //no es texto es el nombre del archivo
 });

module.exports = routera;