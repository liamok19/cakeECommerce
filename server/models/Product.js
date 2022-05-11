const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  // image: {
  //   type: String,
  // },
  pricing: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  image: {
    type: String
  },
  // productStock: {
  //   type: Number,
  //   required: true,
  // },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = model("Product", productSchema);

module.exports = Product;
