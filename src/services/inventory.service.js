const InventoryRepository = require('../repository/inventory.repository');
const ProductRepository = require('../repository/product.repository');
const { BadRequestError, NotFoundError } = require('../errors/ExceptionErrors');

class InventoryService {
    static async getAll() {
        return await InventoryRepository.getAll();
    }

    static async getById(id) {
        return await InventoryRepository.getById(id);
    }

    static async getByProductId(productId) {
        return await InventoryRepository.getByProductId(productId);
    }

    static async create(data) {
        const inventory = await this.getByProductId(data.productId);
        const product = await ProductRepository.getById(data.productId);
        if (inventory) throw new BadRequestError('Inventory already exists');
        if (!product) throw new NotFoundError('Product not found');
        await InventoryRepository.create(data.productId, data.quantity);
    }

    static async update(id, data) {
        const inventory = this.getById(id);
        if (!inventory) throw new NotFoundError('Inventory not found');
        await InventoryRepository.update(id, data.quantity);
    }
}

module.exports = InventoryService;
