const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteControllers');

router.get('/', (req, res) => clienteController.getClientes(req, res));

router.get('/dni/:dni', (req, res) => clienteController.getClientePorDNI(req, res));

router.post('/', (req, res) => clienteController.createCliente(req, res));

router.put('/:id', (req, res) => clienteController.updateCliente(req, res));

router.delete('/:id', (req, res) => clienteController.deleteCliente(req, res));





module.exports = router;
