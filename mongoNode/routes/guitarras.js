const express = require("express");
const {listAllGuitars, saveGuitar, updateGuitar, updatePriceGuitar, deleteGuitar} = require("../controllers/GuitarraController")
const guitarras = express.Router();

guitarras.get('/', listAllGuitars);
guitarras.post('/', saveGuitar);
guitarras.put('/', updateGuitar);
guitarras.patch('/price', updatePriceGuitar);
//guitarras.patch('/stock', updateStockGuitar);
guitarras.delete('/', deleteGuitar);

module.exports = {
    guitarras
}