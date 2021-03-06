const database = require("./config/database");
const productModel = require("./models/product");
const categoryModel = require("./models/category");

const category = require("./data/category");
const product = require("./data/product");

const importData = async () => {
    try{    
        await productModel.deleteMany();
        await categoryModel.deleteMany();

        const savedCategories = await categoryModel.insertMany(category);
        console.log('')

        const products = product.map((prod) => {
            return {...prod, category: savedCategories[0]._id}
        });

        await productModel.insertMany(products);

        console.log('Data imported');
        process.exit();

    }catch(e) {
        console.error('error: '+e);
        process.exit(1);
    }

}


importData();