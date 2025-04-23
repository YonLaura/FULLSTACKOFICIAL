const db = require('../config/db');

class ClienteModel {
    async getAllClientes() {
        const result = await db.query('SELECT * FROM cliente');
        return result.rows;
    }

    async getClientePorDNI(dni) {
        const result = await db.query('SELECT * FROM cliente WHERE dni = $1', [dni]);
        return result.rows[0]; // Solo uno porque el DNI es único
    }

    // Corregir la tabla de 'clientes' a 'cliente'
    async createCliente({ dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
        const result = await db.query(
            'INSERT INTO cliente (dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento]
        );
        return result.rows[0];
    }

    async getClienteById(id) {
        const result = await db.query('SELECT * FROM cliente WHERE id = $1', [id]);
        return result.rows[0];
    }

    // Corregir el paso de parámetros para que coincida con la desestructuración del objeto
    async updateCliente(id, { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
        const result = await db.query(
            'UPDATE cliente SET dni = $1, nombre = $2, apellido_paterno = $3, apellido_materno = $4, fecha_nacimiento = $5 WHERE id = $6 RETURNING *',
            [dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento, id]
        );
        return result.rows[0];
    }

    async deleteCliente(id) {
        await db.query('DELETE FROM cliente WHERE id = $1', [id]);
    }
}

module.exports = new ClienteModel();
