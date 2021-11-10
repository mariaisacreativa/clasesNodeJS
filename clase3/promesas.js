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

const cursoNotasPorEstudiantes = [
    {
        nombreCurso:"Desarrollo Web",
        idEstudiante:1,
        nota1: 3,
        nota2: 4,
        nota3: 5
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

const getCursoNotasPorEstudiante = (id, nombreCurso) => {
    return new Promise((resolve, reject) => {
        const cursoNotasPorEstudiante = cursoNotasPorEstudiantes.find(notas => (notas.idEstudiante == id && notas.nombreCurso == nombreCurso))
        cursoNotasPorEstudiante ? resolve(cursoNotasPorEstudiante) : reject(`No existen Notas en el curso ${nombreCurso} para el estudiante con id ${id}`)
    })
}


const id = 3

    getEstudiante(id)
    .then(xl => {
        console.log(xl.toUpperCase())
        return getCursoPorEstudiante(id)
    })
    .then(curso =>{
        console.log(curso.toLowerCase())
        return getCursoNotasPorEstudiante(id,curso)
    })
    .then(notas =>{
        const{nota1,nota2,nota3} = notas
        console.log("el promedio del estudiante es: " + ((nota1+nota2+nota3)/3))
    })
    .catch(err => {
        console.log(err)
    })

