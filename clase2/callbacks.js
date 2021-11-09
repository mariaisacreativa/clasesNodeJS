const getEmpleadoById = ([id, nombre], callback) => {
    const employe = {
        id, //id: valorId
        nombre
    }

    setTimeout(()=>{
        callback(employe)
    },2000)
}

const myCallback = (employe) => {
    console.log(employe.id)
    console.log(employe.nombre)
}

getEmpleadoById([123456,"Laura"], myCallback)