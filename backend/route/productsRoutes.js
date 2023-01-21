const express=require("express")
const {Productmodel}=require("../modal/productModal")
const productRouter=express.Router()



productRouter.get("/alldata",async(req,res)=>{
    const query=req.query
   try {
       const result= await Productmodel.find(query)
       res.send(result)
   } catch (err) {
    console.log(err)
    console.log({"err":"Something went wrong"})
   }

})


productRouter.get("/search_gender",async(req,res)=>{
    const query=req.query.q
    
    try {
        
        let result=await Productmodel.find({Gender:{$regex:query,$options:"i"}})
        res.send(result)
       
    } catch (error) {
        console.log({"err":"something went wrong"});
        console.log(error)
    }
})
productRouter.get("/search_category",async(req,res)=>{
    const query=req.query.q
    
    try {
        
        let result=await Productmodel.find({Category:{$regex:query,$options:"i"}})
        res.send(result)
       
    } catch (error) {
        console.log({"err":"something went wrong"});
        console.log(error)
    }
})
// productRouter.get("/price",async(req,res)=>{
//     const {price_low,price_high}=req.query
//     try {
//         if(price_low && price_high){
//             let result=await Productmodel.find({Price:{$gte:price_low,$lte:price_high}}).sort({Price:-1})
//             res.send(result)
           
//         }
      
//     } catch (error) {
//         console.log({"err":"something went wrong"});
//         console.log(error)
//     }
// })
productRouter.get("/price_low",async(req,res)=>{
   
    try {
            let result=await Productmodel.find().sort({Price:1})
            res.send(result)
    } catch (error) {
        console.log({"err":"something went wrong"});
        console.log(error)
    }
})
productRouter.get("/price_high",async(req,res)=>{
 
    try {
            let result=await Productmodel.find().sort({Price:-1})
            res.send(result)
    } catch (error) {
        console.log({"err":"something went wrong"});
        console.log(error)
    }
})
productRouter.get("/price_high",async(req,res)=>{
 
    try {
            let result=await (await Productmodel.find()).filter
            res.send(result)
    } catch (error) {
        console.log({"err":"something went wrong"});
        console.log(error)
    }
})
module.exports={productRouter}