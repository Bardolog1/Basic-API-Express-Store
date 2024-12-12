const InvoiceRepository = require('../repository/invoice.repository');

class InvoiceService {
    static async getAll() {
        return await InvoiceRepository.getAll();
    }

    static async getById(id) {
        return await InvoiceRepository.getById(id);
    }

    static async create(data) {
        return await InvoiceRepository.create(data.customerName, data.total);
    }

    static async update(id, data) {
        await InvoiceRepository.update(id, data.customerName, data.total);
    }

    static async delete(id) {
        await InvoiceRepository.delete(id);
    }
}

module.exports = InvoiceService;
