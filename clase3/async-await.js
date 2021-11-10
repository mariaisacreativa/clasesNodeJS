const estudiantes = [
    {
        id: 1,
        nombre: "Camilo"
    },
    {
        id: 2,
        nombre: "Sebas"
    },
    {
        id: 3,
        nombre: "Laura"
    }
]

const cursoPorEstudiantes = [
    {
        idEstudiante: 1,
        nombreCurso: "Desarrollo Web"
    },
    {
        idEstudiante: 2,
        nombreCurso: "Desarrollo de videojuegos"
    }
]

const getEstudiante = (id) => {
    return new Promise((resolve, reject) => {
        const estudiante = estudiantes.find(est => est.id == id)?.nombre
        //operador ternario
        estudiante ? resolve(estudiante) : reject(`No existe el estudiante con id ${id}`)
    })
}

const getCursoPorEstudiante = (id) => {
    return new Promise((resolve, reject) => {
        const cursoPorEstudiante = cursoPorEstudiantes.find(curso => curso.idEstudiante == id)?.nombreCurso
        cursoPorEstudiante ? resolve(cursoPorEstudiante) : reject(`No existe el curso para el estudiante con id ${id}`)
    })
}

/*async function getInformacionEstudiante(){

}*/

let id=4

const getInformacionEstudiante = async (id) =>{
    try{
        const estudiante = await getEstudiante(id)
        const curso = await  getCursoPorEstudiante(id)
        //const notasCurso = await getCursoNotasPorEstudiante(id,nombreCurso)
        return `El estudiante con ${estudiante} está en el curso ${curso}`
    }catch(err){
        throw err;
    }
}



getInformacionEstudiante(id).then((msg)=>{ //nombre, el curso, las notas...
    console.log("Estoy resuelta")
    console.log(msg)
}).catch(err =>{
    console.log("Ocurrió un Reject: " + err)
})