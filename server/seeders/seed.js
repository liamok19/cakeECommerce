const db = require("../config/connection");
const { User, Product, Category } = require("../models");
// const userSeeds = require("../seeders/userSeeds.json");
// const productSeeds = require("../seeders/productSeeds.json");
// const categorySeeds = require("./categorySeeds.json");

db.once("open", async () => {
  try {
    await Category.deleteMany();

    const categories = await Category.insertMany([
      { name: "The Pink Collection" },
      { name: "The Blue Collection" },
      { name: "The down the aisle" },
      { name: "The one that goes with Everything" },
      { name: "The Festive" },
    ]);

    await Product.deleteMany({});

    const products = await Product.insertMany([
      {
        productName: "Red velvet Cake",
        pricing: 125,
        quantity: 2,
        image: "pink01.jpg",
        category: categories[0]._id,
      },
      {
        productName: "Pink Drizzle",
        pricing: 75,
        quantity: 4,
        image: "pink02.jpg",
        category: categories[0]._id,
      },
      {
        productName: "Pink Tower",
        pricing: 275,
        quantity: 1,
        image: "pink03.jpg",
        category: categories[0]._id,
      },
      {
        productName: "The blue horizon",
        pricing: 50,
        quantity: 5,
        image: "blue01.jpg",
        category: categories[1]._id,
      },
      {
        productName: "Blue Collection Volume 01",
        pricing: 100,
        quantity: 2,
        image: "blue02.jpg",
        category: categories[1]._id,
      },
      {
        productName: "Blue Jewel",
        pricing: 160,
        quantity: 1,
        image: "blue03.jpg",
        category: categories[1]._id,
      },
      {
        productName: "Deluxe Chocolate Cake",
        pricing: 100,
        quantity: 3,
        image: "generalCake.jpg",
        category: categories[4]._id,
      },
      {
        productName: "I-Scream",
        pricing: 75,
        quantity: 2,
        image: "generalCake02.jpg",
        category: categories[4]._id,
      },
      {
        productName: "That afternoon vibe",
        pricing: 85,
        quantity: 2,
        image: "generalCake03.jpg",
        category: categories[4]._id,
      },

      {
        productName: "White Tower",
        pricing: 400,
        quantity: 2,
        image: "wedding02.jpg",
        category: categories[3]._id,
      },
      {
        productName: "Flower Bride",
        pricing: 200,
        quantity: 1,
        image: "wedding01.jpg",
        category: categories[3]._id,
      },
      {
        productName: "Traditional Tower",
        pricing: 100,
        quantity: 1,
        image: "wedding03.jpg",
        category: categories[3]._id,
      },
      {
        productName: "The peak Jingle Volume 01",
        pricing: 30,
        quantity: 10,
        image: "festive01.jpg",
        category: categories[2]._id,
      },
      {
        productName: "The peak Jingle Volume 02",
        pricing: 40,
        quantity: 5,
        image: "festive02.jpg",
        category: categories[2]._id,
      },
      {
        productName: "The one with a bow",
        pricing: 75,
        quantity: 5,
        image: "festive03.jpg",
        category: categories[2]._id,
      },
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
      username: "Britney",
      email: "britney@toxic.com",
      password: "hitmebabyonemoretime",
      carts: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id],
        },
      ],
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
