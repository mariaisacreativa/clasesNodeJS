class Celular{ //plantilla, molde  ; cuando class no exitia, tenian que recurrir al prototyping
    constructor(marca, numero){
        this.branch=marca;
        this.number = numero;
    }

    llamar(numberToCall){
        console.log("Accediendo a la troncal de comunicaciones o celda celular...")
        console.log("Iniciando llamada al numero..." + numberToCall + " desde nuestro numero: "+this.number)
        console.log("llamada conectada con "+numberToCall)
    }

    colgar(numberToCancel){
        console.log("colgando al celular "+numberToCancel)
    }
}

//Instanciar una clase (crear una variable del tipo objeto "tal(clase)")
let celular = new Celular("Nokia","3216668989")
let celular2 = new Celular("Samsung","3456668977")

celular.llamar(celular2.number)
celular2.colgar(celular.number)
