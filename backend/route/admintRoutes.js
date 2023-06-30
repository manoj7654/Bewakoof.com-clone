const express=require("express")
const adminRouter=express.Router()
const { admingRegister, admingLogin } = require("../constroller/adming.controller")



adminRouter.get("/",(req,res)=>{
    res.send("Welcome")
})
adminRouter.post("/register",admingRegister)

adminRouter.post("/login",admingLogin)

module.exports={adminRouter}