const fs = require("fs")

let guardarRegistro = (registro,nombreArchivo)=>{ //registro va a ser un documento en json
    fs.writeFile(`./files/${nombreArchivo}.json`,registro,(err)=>{
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
}


let leerRegistro = (nombreArchivo)=>{
    return fs.readFileSync(`./files/${nombreArchivo}.json`,{encoding:"utf-8"})
}

module.exports = {
    guardarRegistro,
    leerRegistro
}