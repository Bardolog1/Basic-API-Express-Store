

class InventoryRepository {
    static async getAll() {
        const [rows] = await global.db.query('SELECT * FROM inventory');
        return rows;
    }

    static async getById(id) {
        const [rows] = await global.db.query('SELECT * FROM inventory WHERE id = ?', [id]);
        return rows[0];
    }

    static async getByProductId(productId) {
        const [rows] = await global.db.query('SELECT * FROM inventory WHERE productId = ?', [productId]);
        return rows[0];
    }

    static async create(productId, quantity) {
        await global.db.query('INSERT INTO inventory (productId, quantity) VALUES (?, ?)', [productId, quantity]);
    }

    static async update(id, productId, quantity) {
        await global.db.query('UPDATE inventory SET productId = ?, quantity = ? WHERE id = ?', [productId, quantity, id]);
    }
}

module.exports = InventoryRepository;
