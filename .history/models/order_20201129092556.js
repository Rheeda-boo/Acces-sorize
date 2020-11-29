const mongoose  = require("mongoose");
const productModel = require("./product ");

const orderSchema = new  mongoose.Schema({
   
    products: [
       { type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "productModel"
       }],
   
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

const orderModel  = mongoose.model("Order", orderSchema);

module.exports = orderModel;