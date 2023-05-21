import ClienteModel from "../models/ClienteModel.js";
import nodemailer from "nodemailer";
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await ClienteModel.findAll();
        res.json(clientes);
    } catch (error) {
        res.json({ menssage: error.message });
    }
}

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "alejoglezlunajw@gmail.com", 
        pass: "cgvunrfrzvoxezhw", 
    },
});

export const createCliente = async (req, res) => {
    try {
        await ClienteModel.create(req.body);
        res.json({ message: "Registro creado" });

      
        const mailOptions = {
            from: "alejoglezlunajw@gmail.com",
            to: "exe.mail.udgvirtual@gmail.com", 
            subject: "Nuevo registro de cliente", 
            text: `Se ha creado un nuevo registro de cliente:
                    Nombre: ${req.body.nombre}
                    Correo: ${req.body.email}
                    Teléfono: ${req.body.telefono}
                    Mensaje: ${req.body.mensaje}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Correo electrónico enviado: " + info.response);
            }
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};