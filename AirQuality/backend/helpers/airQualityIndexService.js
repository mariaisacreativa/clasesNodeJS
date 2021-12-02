const https = require("https");

const getAirQualityIndexFromUSB = () => {
    let mayor = 200, menor = 50;
    return Math.random() * (mayor - menor) + menor;
}

const getAirQualityIndexFromThirdPartyService = () => {
    //Cómo carajos consulto un servicio de terceros?
    return new Promise((resolve, reject) => {
        try {
            https.get("https://api.waqi.info/search/?token=6c5ee3c3e947e9838315bce893fb4201096529db&keyword=bogota", (res) => {
                /*obtener body del response*/
                res.on("data", (chunk) => {
                    let dataJSON = JSON.parse(chunk)
                    let dataLocalidades = dataJSON.data
                    let dataDeMiLocalidad = dataLocalidades.find((localidad)=>{return localidad.uid == 6235})
                    resolve(dataDeMiLocalidad);
                });
            })
        } catch {
            reject("Ocurrió error en la obtención del body")
        }
    }).then((data)=>{return data}).catch((err)=>{return err})
}

module.exports = {
    getAirQualityIndexFromUSB,
    getAirQualityIndexFromThirdPartyService
}