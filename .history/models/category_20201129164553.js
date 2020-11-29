const mongoose  = require("mongoose");

const categorySchema = new  mongoose.Schema({
    name : {
        type : String,
        // required : true,
        trim : true
    },

    description : {
        type : String,
        required : true,
        trim : true
    },

    
});

const categoryModel  = mongoose.model("Category", categorySchema);

module.exports = categoryModel;