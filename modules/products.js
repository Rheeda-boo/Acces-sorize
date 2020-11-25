const mongoose  = require("mongoose");
const categoryModel = require("./categories");


const productSchema = new  mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    price : {
        type : Number,
        required : true,
        
    },

    description : {
        type : String,
        required : true,
        trim : true
    },

    stock : {
        type : String,
        required : true,
        trim : true
    },

    stock : {
        type : String,
        required : true,
        trim : true
    },

    categories: []
});


const productModel  = mongoose.model("Product", productSchema);

module.exports = productModel;