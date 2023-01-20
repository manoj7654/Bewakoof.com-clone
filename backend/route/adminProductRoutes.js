const express=require("express")
const { Productmodel } = require("../modal/productModal")
const {adminAuthenticate}=require("../middleware/admin")
const adminproduct=express.Router()



adminproduct.get("/allproducts",async(req,res)=>
{
    try {
        const products=await Productmodel.find()
        res.send(products)
    } catch (error) {
        res.send("CANNOT GET ALL PRODUCT DATA")
    }
  
})

// adminproduct.use(adminAuthenticate)

adminproduct.post("/create",async(req,res)=>
{
    body=req.body
    // console.log(body)

    try {
        const newproduct=new Productmodel(body)
        await newproduct.save()
        
        res.json(' new products added')
    } catch (error) {
        res.json("Cannot Create new Product")
    }

   
})


adminproduct.patch("/edit/:id", async(req,res)=>{
    const ID=req.params.id
    const body=req.body
    // console.log(ID)

    try {
        await Productmodel.findByIdAndUpdate({_id:ID},body)
        res.send({"message":`updated the data of ID:==>> ${ID}`})
    } catch (error) {
        res.send({"message":"cannot update the product"})
    }
  
})


adminproduct.delete("/delete/:id", async(req,res)=>
{
    const ID=req.params.id
    console.log(ID)

    try {
        await Productmodel.findByIdAndDelete({_id:ID})
        res.send({"message":`deleted the item id ${ID}`})
    } catch (error) {
        res.send( {"message":"cannot delete "})
    }
    
})

module.exports={
    adminproduct
}