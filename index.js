const express = require("express")
const app = express();
const PORT = 8000
const router = require("./routes/products")
const connect = require("./config/connection")
app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send("i am working")
// })

app.use("/api/products",router)

const start = async ()=>{
    try{
        await connect()
        app.listen(PORT,()=>{
            console.log(`i am at ${PORT}`)
        });
    }catch(error){
        console.log(error)
    }
};
start();