
const esperarLaPromesa = async () => {
    console.log("Cliente: Voy a comprar el arroz y lo voy a esperar")
    //console.log("El cliente le pide un arroz chino al mensajero...")

    const respuestaMensajero = () => {
        //console.log("Te prometo que si todo sale bien, te entrego el arroz chino, si algo sale mal, entonces te mando un mensaje diciendo que no pude llevar el arroz")
        console.log("Mensajero: Le prometo que...")
        //resolve("entregar el arroz chino") //reject("no pude llevar el arroz")
        return new Promise((resuelve, rechaza) => {
            try {
                //console.log("Voy, tomo la moto, y me dirijo al restaurante...")
                //throw "Me cai en la moto"
                setTimeout(() => {
                    console.log("El arroz chino está listo")
                    console.log("Yo como mensajero se lo voy a llevar...")
                    resuelve("entregar el arroz chino")
                }, 10000)
            } catch (err) {
                rechaza("Mensajero: no pude llevar el arroz->razon: "+err)
            }
        })
    }

    let ArrozChino = await respuestaMensajero().then(msgPositivo=>msgPositivo).catch(error =>{return error})
    console.log("Cliente: recibí el arroz? " + ArrozChino)
    console.log("Cliente: Se acabó el tiempo, me voy")
}

esperarLaPromesa()