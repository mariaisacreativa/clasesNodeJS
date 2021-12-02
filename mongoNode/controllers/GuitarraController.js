const Guitarra = require("../models/Guitarra")

const listAllGuitars = (req, res) => {
    Guitarra.find((err, guitarras) => {
        if (err) return res.send(err)
        return res.send(guitarras)
    })
}

const saveGuitar = (req, res) => {
    let document = req.body;
    Guitarra.find({ "modelo": document.modelo, "marca": document.marca }, (err, guitarras) => {
        if (err) return res.send(err);
        if (guitarras.length > 0) {
            res.send("El documento ya existe!");
        } else {
            Guitarra.create(req.body).then((data) => {
                console.log(data)
                return res.send("Se creó el documento");
            }).catch(err => {
                console.log(err);
                return res.send("upps!" + err);
            })
        }
    })
}

const updateGuitar = (req, res) => {
    Guitarra.updateOne({ "modelo": req.query.modelo, "marca": req.query.marca }, req.body, (err, mongoResponse) => {
        if (err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizó el documento")
    });
}

const updatePriceGuitar = (req, res) => {
    if (req.body.precio) {
        Guitarra.updateOne({ "modelo": req.query.modelo, "marca": req.query.marca }, { "precio": req.body.precio }, (err, mongoResponse) => {
            if (err) return res.send(err)
            console.log(mongoResponse)
            return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizó el documento")
        });
    }else{
        res.send("No esta el precio en el body!, no se realiza la actualización del precio")
    }
}

const deleteGuitar = (req,res) => {
    Guitarra.deleteOne({ "modelo": req.query.modelo, "marca": req.query.marca },(err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deletedCount == 1 ? res.send("Se eliminó el documento") : res.send("No se eliminó el documento")
    })
}

module.exports = {
    listAllGuitars,
    saveGuitar,
    updateGuitar,
    updatePriceGuitar,
    deleteGuitar
}