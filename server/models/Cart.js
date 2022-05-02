const { Schema, model } = require('mongoose');
const { create } = require('./User');

const cartSchema = new Schema ({
    cartQuantity: {
        type: Number, 
        required: true
    },
});

const Cart = model('Cart', cartSchema);

module.exports = Cart