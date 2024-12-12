const inventoryService = require('../services/inventory.service');

const getInventory = async (req, res, next) => {
    try {
        const inventory = await inventoryService.getAll();
        res.status(200).json(inventory);
    } catch (error) {
        next(error);
    }
};

const getInventoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const inventory = await inventoryService.getById(id);
        res.status(200).json(inventory);
    } catch (error) {
        next(error);
    }
};

const getInventoryByProductId = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const inventory = await inventoryService.getByProductId(productId);
        res.status(200).json(inventory);
    } catch (error) {
        next(error);
    }
};

const createInventory = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        await inventoryService.create({ productId, quantity });
        res.status(201).send();
    } catch (error) {
        next(error);
    }
};

const updateInventory = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const { id } = req.params;
        const updatedInventory = await inventoryService.update(id, { productId, quantity });
        res.status(200).json(updatedInventory);
    } catch (error) {
        next(error);
    }
};

module.exports = { getInventory, updateInventory, getInventoryById, getInventoryByProductId, createInventory };
