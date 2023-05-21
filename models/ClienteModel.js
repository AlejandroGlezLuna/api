import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ClienteModel = db.define( "clientes", {
    nombre : { type: DataTypes.STRING },
    email : { type: DataTypes.STRING },
    telefono : { type: DataTypes.STRING },
    mensaje : { type: DataTypes.STRING },
})

export default ClienteModel