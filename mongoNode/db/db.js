const mongoose = require("mongoose")
const connectionString = "mongodb+srv://test:1234@mongotest.bxaw0.mongodb.net/guitarraVieja?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Se ha establecido conexión con la base de datos!")
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB
}