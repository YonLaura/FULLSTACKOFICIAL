const productService = require('../services/productService');

class ProductController {
    async getProducts(req, res) {
        try {
            console.log("Entrando a getProducts");
            const products = await productService.getProducts();
            console.log("Productos obtenidos:", products);
            res.json(products);
        } catch (error) {
            console.error("ERROR EN getProducts:", error);
            res.status(500).json({ message: 'Error al obtener los productos' });
        }
    }

    async createProduct(req, res) {
        try {
            const { nombre, precio, descripcion } = req.body;
            const newProduct = await productService.addProduct({ nombre, precio, descripcion });
            res.status(201).json(newProduct);
        } catch (error) {
            console.error("ERROR EN createProduct:", error);
            res.status(500).json({ message: 'Error al crear el producto' });
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { nombre, precio, descripcion } = req.body;
            const updatedProduct = await productService.modifyProduct(id, { nombre, precio, descripcion });
            res.json(updatedProduct);
        } catch (error) {
            console.error("ERROR EN updateProduct:", error);
            res.status(500).json({ message: 'Error al actualizar el producto' });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            await productService.removeProduct(id);
            res.sendStatus(204);
        } catch (error) {
            console.error("ERROR EN deleteProduct:", error);
            res.status(500).json({ message: 'Error al eliminar el producto' });
        }
    }
}

module.exports = new ProductController();
