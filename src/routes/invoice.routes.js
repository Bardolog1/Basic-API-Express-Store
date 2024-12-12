const express = require('express');
const {
    getInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    getInvoiceById
} = require('../controllers/invoice.controller');
const validateInvoice = require('../middlewares/validateInvoice');
const router = express.Router();

router.get('/', getInvoices);
router.get('/:id', getInvoiceById);
router.post('/', validateInvoice, createInvoice);
router.put('/:id', validateInvoice, updateInvoice);
router.delete('/:id', deleteInvoice);

module.exports = router;
