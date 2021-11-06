const http = require("http")

http.createServer(function(req,res){
    console.log(req)
    res.write("Hola Mundo!!!!")
    res.end();
}).listen(8080)