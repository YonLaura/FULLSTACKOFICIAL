const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Configura estas rutas
router.get('/products', productController.getProducts); // ← Falta esta ruta
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;