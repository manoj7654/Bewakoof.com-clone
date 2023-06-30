const express=require("express")
const {Usermodel}=require("../modal/userModal")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { register, login } = require("../constroller/user.controller")
const userRouter=express.Router()


userRouter.get("/",(req,res)=>{
    res.send("Welcome")
})
userRouter.post("/register",register)

userRouter.post("/login",login)

module.exports={userRouter}