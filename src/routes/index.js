const express = require('express');
const productRoutes = require('./product.routes');
const invoiceRoutes = require('./invoice.routes');
const inventoryRoutes = require('./inventory.routes');

const router = express.Router();

router.use('/products', productRoutes);
router.use('/invoices', invoiceRoutes);
router.use('/inventory', inventoryRoutes);

module.exports = router;
