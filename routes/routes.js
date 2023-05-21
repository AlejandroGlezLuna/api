import express from 'express';
import { createCliente, getAllClientes } from '../controllers/ClientesController.js';

const router = express.Router();

router.get('/', getAllClientes)
router.post('/', createCliente)

export default router