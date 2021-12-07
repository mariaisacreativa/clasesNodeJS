const express = require("express");
const {listAllGuitars, saveGuitar, updateGuitar, updatePriceGuitar, deleteGuitar, listAllBohemiaGuitars, searchGuitarsByBranch} = require("../controllers/GuitarraController")
const {verificarToken} = require('../middleware/verificarToken')


const guitarras = express.Router();

guitarras.use(verificarToken)

guitarras.get('/', listAllGuitars);
guitarras.get('/bohemia', listAllBohemiaGuitars);
guitarras.get('/searchBranch', searchGuitarsByBranch);
guitarras.post('/', saveGuitar);
guitarras.put('/', updateGuitar);
guitarras.patch('/price', updatePriceGuitar);
//guitarras.patch('/stock', updateStockGuitar);
guitarras.delete('/', deleteGuitar);

module.exports = {
    guitarras
}