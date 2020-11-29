const mongoose  = require("mongoose");
const categoryModel = require("./category");


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

    image : {
        type : String,
        required : true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "categoryModel"
    }
});


const productModel  = mongoose.model("Product", productSchema);

module.exports = productModel;