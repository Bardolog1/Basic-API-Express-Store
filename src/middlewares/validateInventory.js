const validateInventory = (req, res, next) => {
    const { productId, quantity } = req.body;
    if (!productId || quantity == null) {
        return res.status(400).json({ message: 'Product ID and quantity are required' });
    }
    next();
};

module.exports = validateInventory;
