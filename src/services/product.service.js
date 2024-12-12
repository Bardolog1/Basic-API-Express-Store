const { BadRequestError, NotFoundError } = require('../errors/ExceptionErrors');
const ProductRepository = require('../repository/product.repository');

class ProductService {
    static async getAll() {
        return await ProductRepository.getAll();
    }

    static async getById(id) {
        return await ProductRepository.getById(id);
    }

    static async getByName(name) {
        return await ProductRepository.getByName(name);
    }

    static async create(data) {
        const product = await this.getByName(data.name);
        if (product) throw new BadRequestError('Product already exists with this name');
        return await ProductRepository.create(data.name, data.price);
    }

    static async update(id, data) {
        const product = await this.getById(id);
        if (!product) throw new NotFoundError('Product not found');
        await ProductRepository.update(id, data.name, data.price);
    }

    static async delete(id) {
        await ProductRepository.delete(id);
    }
}

module.exports = ProductService;
