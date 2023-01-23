const connect = require("./config/connection");
const Product = require('./models/product');
const ProductJSon = require("./products.json")


const start = async ()=>{
    try{
        await connect("mongodb+srv://hmwork:hmwork@cluster0.kemkdir.mongodb.net/?retryWrites=true&w=majority");
        await Product.create(ProductJSon);
        console.log("Success")
    }catch(error){
        console.log(error)
    }
}

start();