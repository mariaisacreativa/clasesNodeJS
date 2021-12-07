const express = require("express");
const cors = require("cors")
const {connectDB} = require("./db/db");
const app = express();
const {guitarras} = require("./routes/guitarras")
const {usuarios} = require("./routes/usuarios")
connectDB();

app.use(express.json());
app.use(cors());
app.use('/guitarras',guitarras);
app.use('/usuarios',usuarios);

app.listen(3000,()=>{
    console.log("Estoy escuchando en el host: http://localhost:" + 3000);
});
