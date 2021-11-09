let empleado = {
    nombre: 'Lucas',
    apellido: 'Rave',
    edad: 34
}

/*function imprimirNombreApellidoEmpleado(empleado){
    console.log(empleado.nombre,empleado.apellido)
}*/

function imprimirNombreApellidoEmpleado({nombre,apellido}){
    console.log(nombre,apellido)
}

const {nombre,apellido,edad} = empleado

console.log(nombre, apellido, edad)

//imprimirNombreApellidoEmpleado(empleado)

const miembrosDeFamilia = ["padres", "hijos", "nietos"]

//const [fam1,fam2,fam3] = miembrosDeFamilia

const [fam1,,fam3] = miembrosDeFamilia

console.log(fam1,fam3)

const itemN = miembrosDeFamilia[n]

miembrosDeFamilia.map