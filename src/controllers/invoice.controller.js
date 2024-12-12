const invoiceService = require('../services/invoice.service');

const getInvoices = async (req, res, next) => {
    try {
        const invoices = await invoiceService.getAll();
        res.status(200).json(invoices);
    } catch (error) {
        next(error);
    }
};

const getInvoiceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const invoice = await invoiceService.getById(id);
        res.status(200).json(invoice);
    } catch (error) {
        next(error);
    }
}

const createInvoice = async (req, res, next) => {
    try {
        const invoiceData = req.body;
        const invoice = await invoiceService.create(invoiceData);
        res.status(201).json(invoice);
    } catch (error) {
        next(error);
    }
};

const updateInvoice = async (req, res, next) => {
    try {
        const invoiceData = req.body;
        const { id } = req.params;
        const updatedInvoice = await invoiceService.update(id, invoiceData);
        res.status(200).json(updatedInvoice);
    } catch (error) {
        next(error);
    }
};

const deleteInvoice = async (req, res, next) => {
    try {
        const { id } = req.params;
        await invoiceService.delete(id);
        res.status(200).json({ message: `Invoice ${id} deleted` });
    } catch (error) {
        next(error);
    }
};

module.exports = { getInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceById };
