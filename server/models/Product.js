const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    productPricing: {
        type: Number,
        required: true, 
    },
    productStock: {
        type: Number,
        required: true, 
    },
});

const Product = model('Product', productSchema);

module.exports = Product;