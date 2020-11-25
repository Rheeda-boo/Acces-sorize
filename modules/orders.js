const mongoose  = require("mongoose");
const productModel = require("./products");

const orderSchema = new  mongoose.Schema({
   
    products :[],
    //  : {
    //     type : Number,
    //     required : true,
    //     trim : true
    // },

    totalAmount : {
        type : Number,
        required : true,
        trim : true
    },

    shippingInfo : {
        type : String,
        required : true,
        trim : true
    },

});

const orderModel  = mongoose.model("Product", orderSchema);

module.exports = orderModel;