const estudiantes = [
    {
        id: 1,
        nombre: "Camilo"
    },
    {
        id:2,
        nombre: "Sebas"
    },
    {
        id:3,
        nombre: "Laura"
    }
]

const cursoPorEstudiantes = [
    {
        idEstudiante:1,
        nombreCurso: "Desarrollo Web"
    },
    {
        idEstudiante:2,
        nombreCurso: "Desarrollo de videojuegos"
    }
]

const getEstudiante = (id, callback) =>{
    const estudiante = estudiantes.find(est=>est.id == id)?.nombre
    if(estudiante){ /*estudiante = undefined or null*/
        callback(null,estudiante)
    }else{
        callback("No existe el estudiante")
    }
}

/*getEstudiante(3, (err,estudiante)=>{
    if(err){
        console.log("Error!!!!")
        console.log(err)
    }else{
        console.log(estudiante)
    }
})*/


const getCursoPorEstudiante = (id, callback) => {
    const cursoPorEstudiante = cursoPorEstudiantes.find(curso=>curso.idEstudiante == id)?.nombreCurso

    if(cursoPorEstudiante){
        callback(null, cursoPorEstudiante)
    }else{
        callback("No existe un curso para ese id")
    }
}

/*getCursoPorEstudiante(3,(err,cursoPorEstudiantes)=>{
    if(err){
        console.log("Error!!!!")
        console.log(err)
    }else{
        console.log(cursoPorEstudiantes)
    }
})*/


const id=1

getEstudiante(id,(err, estudiante)=>{
    if(err){
        console.error("Error!")
    }else{
        getCursoPorEstudiante(id,(err, nombreCurso)=>{
            if(err){
                console.error("Error! el estudiante: " + estudiante + " no está en ningún curso")
            }else{
                console.log("El estudiante: " + estudiante, " esta en el curso: " + nombreCurso)
            }
        })
    }
})