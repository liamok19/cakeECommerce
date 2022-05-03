const { Schema, model } = require('mongoose');
const { create } = require('./User');

const cartSchema = new Schema ({
   //default not required quanity of carts because there will only be 1 cart per user. 
    // cartQuantity: {
    //     type: Number, 
    //     required: true
    // },
    products: [
        {type: Schema.Types.ObjectId,
        ref: 'Product'}
    ]
});

const Cart = model('Cart', cartSchema);

module.exports = Cart



// 1 user has multiple carts (only 1 active cart at a time)
// 1 product can have multple cart reference

//multiple items process
// cartItem : [
//     {
//         productId: objId,
//         qty: 1,
//         attr: {
//             size: 'xl',
//             colour: 'blue'
//         },
//         notes: {
//             content: "Please send me money",
//         }
//     }
// ]