const express = require("express");
const {connectDB} = require("./db/db");
const app = express();
const {guitarras} = require("./routes/guitarras")
connectDB();

app.use(express.json());
app.use('/guitarras',guitarras);

app.listen(8080,()=>{
    console.log("Estoy escuchando en el host: http://localhost:" + 8080);
});
