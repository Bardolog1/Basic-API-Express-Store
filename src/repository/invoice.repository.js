class InvoiceRepository {
    static async getAll() {
        const [rows] = await global.db.query('SELECT * FROM invoices');
        return rows;
    }

    static async getById(id) {
        const [rows] = await global.db.query('SELECT * FROM invoices WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(customerName, total) {
        const [result] = await global.db.query('INSERT INTO invoices (customerName, total) VALUES (?, ?)', [customerName, total]);
        return result.insertId;
    }

    static async update(id, customerName, total) {
        await global.db.query('UPDATE invoices SET customerName = ?, total = ? WHERE id = ?', [customerName, total, id]);
    }

    static async delete(id) {
        await global.db.query('DELETE FROM invoices WHERE id = ?', [id]);
    }
}

module.exports = InvoiceRepository;
