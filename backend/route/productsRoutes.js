const express=require("express")
const {Productmodel}=require("../modal/productModal")
const productRouter=express.Router()



productRouter.get("/alldata",async(req,res)=>{
   try {
       const result= await Productmodel.find()
       res.send(result)
   } catch (err) {
    console.log(err)
    console.log({"err":"Something went wrong"})
   }

})


// productRouter.post("/create",async(req,res)=>{
//     const body=req.body
//    try {
//        const result= new Productmodel(body)
//        await result.save()
//        res.send("product added")
//    } catch (err) {
//     console.log(err)
//     console.log({"err":"Something went wrong"})
//    }

// })
// productRouter.patch("/edit/:id",async(req,res)=>{
//     const Id=req.params.id;
//     const body=req.body;
//     try {
//         await Productmodel.findByIdAndUpdate({_id:Id},body)
//         res.send("Product has been update")
//     } catch (err) {
//         console.log(err)
//     console.log({"err":"Something went wrong"})
//     }
// })


// productRouter.delete("/delete/:id",async(req,res)=>{
//     const Id=req.params.id;
  
//     try {
//         await Productmodel.findByIdAndDelete({_id:Id})
//         res.send("Product has been deleted")
//     } catch (err) {
//         console.log(err)
//     console.log({"err":"Something went wrong"})
//     }
// })

module.exports={productRouter}