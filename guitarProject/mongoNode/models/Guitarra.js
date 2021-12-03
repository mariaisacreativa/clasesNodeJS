const {Schema, model} = require("mongoose");

const guitarraSchema = new Schema({
    tipo:{
        type: String
    },
    marca:{
        type: String
    },
    precio:{
        type: Number
    },
    stock:{
        type: Number
    },
    modelo: {
        type: String
    }
});

module.exports = model("Guitarra",guitarraSchema,"guitarras")