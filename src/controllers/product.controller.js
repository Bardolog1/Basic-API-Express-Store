const productService = require('../services/product.service');

const getProducts = async (req, res, next) => {
    try {
        const products = await productService.getAll();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.getById(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const product = await productService.create({ name, price });
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const { id } = req.params;
        const updatedProduct = await productService.update(id, { name, price });
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        await productService.delete(id);
        res.status(200).json({ message: `Product ${id} deleted` });
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct, getProductById };  
