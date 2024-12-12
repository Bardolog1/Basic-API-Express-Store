const express = require('express');
const {
    getInventory,
    updateInventory,
    getInventoryById,
    getInventoryByProductId,
    createInventory
} = require('../controllers/inventory.controller');
const validateInventory = require('../middlewares/validateInventory');
const router = express.Router();

router.get('/', getInventory);
router.get('/:id', getInventoryById);
router.get('/product/:productId', getInventoryByProductId);
router.post('/', validateInventory, createInventory);
router.put('/:id', validateInventory, updateInventory);

module.exports = router;
