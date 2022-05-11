const db = require("../config/connection");
const { User, Product, Category} = require('../models');
// const userSeeds = require("../seeders/userSeeds.json");
// const productSeeds = require("../seeders/productSeeds.json");
// const categorySeeds = require("./categorySeeds.json");

db.once("open", async () => {
  try {
    await Category.deleteMany();

    const categories = await Category.insertMany([
      { name: 'The Pink Collection' },
      { name: 'The Blue Collection' },
      { name: 'The Festive' },
      { name: 'The down the aisle' },
      { name: 'The one that goes with Everything' },
    ])

    await Product.deleteMany({});

    const products = await Product.insertMany(
      [
        {
            productName: "Red velvet Cake",
            pricing: 125,
            quantity: 2,
            image: 'pink01.jpg',
            category: categories[2]._id
    
        }, 
        {
            productName: "Deluxe Chocolate Cake",
            pricing: 100,
            quantity: 3,
            image: 'generalCake.jpg',
            category: categories[3]._id
        }
      ]);


    await User.deleteMany();

    // await User.create(userSeeds);
    // for (let i = 0; i < productSeeds.length; i++) {
    //   const { _id, productName } = await Product.create(productSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: productName },
    //     {
    //       $addToSet: {
    //         products: _id,
    //       },
    //     }
    //   );
    // }
    await User.create({
      username: 'Britney',
      email: 'britney@toxic.com',
      password: 'hitmebabyonemoretime',
      carts: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id]
        }
      ]
    });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
