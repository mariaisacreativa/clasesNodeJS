const https = require('https');

https.get('https://api.waqi.info/feed/bogota/?token=6c5ee3c3e947e9838315bce893fb4201096529db', (resp) => {
  let data = '';

  // Un fragmento de datos ha sido recibido.
  resp.on('data', (chunk) => {
      console.log(chunk)
    data += chunk;
  });

  // Toda la respuesta ha sido recibida. Imprimir el resultado.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});