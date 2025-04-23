const productModel = require('../models/productModels');

class ProductService {
    async getProducts() {
        return productModel.getAllProducts(); 
    }

    async getProductById(id) {
        return productModel.getProductById(id); 
    }

    async addProduct(data) {
        return productModel.createProduct(data); 
    }

    async modifyProduct(id, data) {
        return productModel.updateProduct(id, data); 
    }

    async removeProduct(id) {
        await productModel.deleteProduct(id);
        return { message: 'Producto eliminado' }; 
    }
}

module.exports = new ProductService();
