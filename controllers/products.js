const Product = require("../models/product")
// const getAllProducts = async(req,res)=>{
//     res.status(200).json({msg:" i am getAllProducts"})
// }

// const getAllProductsTesting = async(req,res)=>{
//     res.status(200).json({msg:" i am getAllProductsTesting"})
// }

const getAllProducts = async(req,res)=>{
    const response = await Product.find()
    res.status(200).json({response})
}

// const getAllProductsTesting = async(req,res)=>{
//     const response = await Product.find({company:"Samsung"})
//     res.status(200).json({response})
// }

// const getAllProductsTesting = async(req,res)=>{
//     const response = await Product.find(req.query)
//     res.status(200).json({response})
// }
// http://localhost:8000/api/products/testing?company=apple&name=iphone10


// when company=apple&sdfs=sdfsd
// const getAllProductsTesting = async(req,res)=>{
//     const {company}   = req.query;
//     const queryObject = {}
//     if(company){
//         queryObject.company = company;
//         console.log(queryObject);
//     }
//     const response = await Product.find(queryObject)
//     res.status(200).json({response})
// }

// when company=apple&name=watch means name is valid

// const getAllProductsTesting = async(req,res)=>{
//     const { company,name }   = req.query;
//     const queryObject = {}
//     if(company){
//         queryObject.company = company;
//     }
//     if(name){
//         queryObject.name = name;
//     }
//     console.log(queryObject);

//     const response = await Product.find(queryObject)
//     res.status(200).json({response})
// }

// what if i wanna show all iphone 

// const getAllProductsTesting = async(req,res)=>{
//     const { company,name,featured }   = req.query;
//     const queryObject = {}
//     if(company){
//         queryObject.company = company;
//     }
//     if(name){
//         queryObject.name = { $regex:name,$options:"i" };
//     }
//     if(featured){
//         queryObject.featured = featured
//     }
//     console.log(queryObject);

//     const response = await Product.find(queryObject)
//     res.status(200).json({response})
// }

// sorting functionality

// const getAllProductsTesting = async(req,res)=>{
//     const { company,name,featured,sort }   = req.query;
//     const queryObject = {}
//     if(company){
//         queryObject.company = company;
//     }
//     if(name){
//         queryObject.name = { $regex:name,$options:"i" };
//     }
//     if(featured){
//         queryObject.featured = featured
//     }

//     let apiData = Product.find(queryObject);

//     if(sort){
//         let sortfix = sort.replace(","," ");
//         apiData  = apiData.sort(sortfix)
//         // queryObject.sort = sortFix
//     }

//     console.log(queryObject);

//     const response = await apiData;
//     res.status(200).json({response})
// }


// selecting functionality

const getAllProductsTesting = async(req,res)=>{
    const { company,name,featured,sort,select }   = req.query;
    const queryObject = {}
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = { $regex:name,$options:"i" };
    }
    if(featured){
        queryObject.featured = featured
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortfix = sort.replace(","," ");
        apiData  = apiData.sort(sortfix)
        // queryObject.sort = sortFix
    }

    if(select){
        let selectFix = select.replace(","," ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 3

    console.log(queryObject);

    const response = await apiData;
    res.status(200).json({response, nbHints:response.length})
}

module.exports = {getAllProducts,getAllProductsTesting} 