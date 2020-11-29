const database = require("./config/database");
const productModel = require("./models/product");
const categoryModel = require("./models/category");
const orderModel = require("./models/order");

const order = require("./data/order");
const category = require("./data/category");
const product = require("./data/product");

const importData = async () => {
    try{

    }catch(e) {
        console.error('error: '+e);
        process.exit(1)
    }

}
