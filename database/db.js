const jewelry = require("./jewelry.js");
const housewares = require("./housewares.js");
const accessories = require("./accessories.js");
const toys = require("./toys.js");

const mongoose = require("mongoose");
// const host = "mongo";
const host = "localhost";
mongoose.connect(`mongodb://${host}:27017/products`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(`we're connected!`);
});
const productSchema = new mongoose.Schema({
  listing_id: {
    // <-- product id
    type: Number,
    unique: true
  },
  title: String
});

const Products = mongoose.model("Products", productSchema);

const productsSave = products => {
  Products.insertMany(products)
    .then(data => {
      console.log("...Saved products to database...");
      return data;
    })
    .catch(err => {
      console.log("...product saving err... ");
    });
};

const findProducts = async searchterm => {
  const product = await Products.find({
    title: { $regex: `${searchterm}`, $options: "im" }
  })
    .limit(10)
    .catch(error => {
      return `error of , ${error}`;
    });
  return product;
};

const findTenRandomProducts = async () => {
  const returnQty = 10;
  const products = await Products.aggregate()
    .sample(returnQty)
    .catch(error => {
      return `error of , ${error}`;
    });
  return products;
};

let initialized = false;

const initializeProducts = () => {
  productsSave(jewelry.results);
  productsSave(housewares.results);
  productsSave(accessories.results);
  productsSave(toys.results);
  initialized = true;
  return initialized;
};

if (!initialized) {
  initializeProducts();
}

module.exports = {
  findProducts,
  findTenRandomProducts
};
