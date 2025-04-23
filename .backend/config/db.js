const { Pool } = require('pg');

class Database {
    constructor() {
        this.pool = new Pool({
            user: "postgres",
            host: 'localhost',
            database: 'postgres',
            password: 'admin123',
            port: 5432,
        });
    }

    query(text, params) {
        return this.pool.query(text, params);
    }
}

module.exports = new Database();
