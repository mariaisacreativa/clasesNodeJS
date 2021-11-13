const http = require("http")
const { calcularAreaCilindro, calcularAreaEsfera } = require("./helpers/areas")
const colors = require("colors")


const port = 8080
const ip = "localhost" //localhost = 127.0.0.1; dispositivos conectados a la misma red wifi, necesitamos ver la ip de nuestro en la LAN inalambrica (192.168.1.184)

http.createServer(function (request, response) {
    const incomingUrl = new URL(request.url, `http://${request.headers.host}`)
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" })

    switch (incomingUrl.pathname) {
        case '/cilindro':
            const r = (incomingUrl.searchParams.get('r'))
            const h = (incomingUrl.searchParams.get('h'))
            let area = calcularAreaCilindro(r, h)
            if (area) {
                response.write(JSON.stringify({area}))
            } else {
                response.write("error")
            }
            break;
        case '/esfera':
            const ra = (incomingUrl.searchParams.get('radio'))
            response.write(`El resultado del area de la esfera es: ${calcularAreaEsfera(ra)}`)
            break;
        case '/cubo':

            break;
        default:
            response.write("Esa ruta no existe")
    }

    response.end();
}).listen(port, ip, () => {
    console.log(`Se inicio el server en la direccion -> http://${ip}:${port}`)
})

