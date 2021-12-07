const jwt = require('jsonwebtoken');

const verificarToken = (req,res, next)=>{
    let jwToken = req.header('Authorization')
    if(!jwToken) return res.send({"msg":"Acceso denegado, No hay token"})
    jwToken = jwToken.split(' ')[1]
    if(!jwToken)  return res.send({"msg":"Acceso denegado, No hay token"})
    try{
        let payload = jwt.verify(jwToken,"mongoNode")
        req.user = payload
        next()
    }catch(err){
        res.send({"msg":"Token no válido"})
    }
}

module.exports = {verificarToken}