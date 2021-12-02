const express = require("express");
const guitarras = express.Router();

guitarras.get('/', (req,res)=>{
    console.log("Recibí una petición en el Router guitarras!");
    res.send("Tu solicitud ha sido atendida desde el Router guitarras!");
});

guitarras.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
});

module.exports = {
    guitarras
}