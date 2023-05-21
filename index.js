import express from "express";
import cors from "cors";
import db from "./database/db.js";
import PORT from "./config.js";

import clienteRoutes from "./routes/routes.js"

const app = express();

app.use (cors())
app.use(express.json())
app.use("/clientes", clienteRoutes)

try {
    await db.authenticate()
    console.log("Conexión exitosa a la BBDD")
} catch (error) {
    console.log(`El error es  ${error}`)
}
/*
app.get('/', (req, res) => {
    res.send("Hola mundo")
})
*/

app.listen(PORT, () => {
    console.log("Usando puerto " , PORT)
})