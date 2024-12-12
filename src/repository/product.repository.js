class ProductRepository {
    static async getAll() {
        const [rows] = await global.db.query('SELECT * FROM products');
        return rows;
    }

    static async getById(id) {
        const [rows] = await global.db.query('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(name, price) {
        const [result] = await global.db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
        return result.insertId;
    }

    static async update(id, name, price) {
        await global.db.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id]);
    }

    static async delete(id) {
        await global.db.query('DELETE FROM products WHERE id = ?', [id]);
    }
}

module.exports = ProductRepository;
