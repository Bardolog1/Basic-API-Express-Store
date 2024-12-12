const express = require('express');
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
} = require('../controllers/product.controller');
const validateProduct = require('../middlewares/validateProduct');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', validateProduct, createProduct);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
