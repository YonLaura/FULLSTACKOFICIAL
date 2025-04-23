const db = require('../config/db');

class ProductModel {
    async getAllProducts(){
        const result = await db.query('SELECT * FROM productos');  
        return result.rows;
    }

    async getProductById(id){
        const result = await db.query('SELECT * FROM productos WHERE id = $1', [id]);  
        return result.rows[0];  
    }

    async createProduct([nombre, precio, descripcion]) {
        const result = await db.query(  
            'INSERT INTO productos (nombre, precio, descripcion) VALUES ($1, $2, $3) RETURNING *',  
            [nombre, precio, descripcion]
        );
        return result.rows[0];
    }

    async updateProduct(id, [nombre, precio, descripcion]){
        const result = await db.query(
            'UPDATE productos SET nombre = $1, precio = $2, descripcion = $3 WHERE id = $4 RETURNING *',  
            [nombre, precio, descripcion, id]
        );
        return result.rows[0];
    }

    async deleteProduct(id){
        await db.query('DELETE FROM productos WHERE id = $1', [id]); 
    }
}

module.exports = new ProductModel();
