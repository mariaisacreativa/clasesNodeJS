const http = require("http")
const {calcularAreaCilindro, calcularAreaEsfera} = require("./helpers/areas")
const colors = require("colors")


const port=8080
const ip="localhost" //localhost = 127.0.0.1; dispositivos conectados a la misma red wifi, necesitamos ver la ip de nuestro en la LAN inalambrica (192.168.1.184)

http.createServer((request, response)=>{
    const incomingUrl = new URL(request.url, `http://${request.headers.host}`)
    
    switch(incomingUrl.pathname){
        case '/cilindro':
            const r = (incomingUrl.searchParams.get('r'))
            const h = (incomingUrl.searchParams.get('h'))
            response.write(`
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <!--Bootstrap styles-->
                <link href="./assets/css/styles.css" rel="stylesheet">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            </head>
            
            <body>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">MathTools</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link" aria-current="page" href="./index.html">Home</a>
                                    <a class="nav-link active" href="#">Áreas</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div class="d-flex justify-content-center mt-5">
                    <div class="card text-center" style="width: 80em;">
                    <div class="card-header">
                        <h2>Bienvenido</h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">El resultado del área de la esfera es: </h5>
                        <p class="card-text">${calcularAreaCilindro(r,h)}</p>
                        <a href="http://localhost:5500/clase4/MathTools/frontend/areas.html" class="btn btn-primary">Regresar!</a>
                    </div>
                </div>
                    </div>
                </main>
            
                <!--Bootstrap scripts-->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
            </body>
            
            </html>
            `)
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
}).listen(port,ip,()=>{
    console.log(`Se inicio el server en la direccion -> http://${ip}:${port}`)
})

