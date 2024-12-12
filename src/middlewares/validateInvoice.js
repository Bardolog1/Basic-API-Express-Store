const validateInvoice = (req, res, next) => {
    const { customerName, total } = req.body;
    if (!customerName || !total) {
        return res.status(400).json({ message: 'Customer name and total are required' });
    }
    next();
};

module.exports = validateInvoice;
