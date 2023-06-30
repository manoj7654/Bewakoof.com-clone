const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Usermodel}=require("../modal/userModal")
require("dotenv").config();

const register = async (req, res) => {

const {name,mobile,email,password}=req.body
    try {
         // Input validation - check that name, email, and password are present in the request body
    if (!name || !mobile || !email  || !password) {
      return res.status(400).json({
        message: "Name, mobile,email and password are required.",
      });
    }
        const check=await Usermodel.find({email})
        
        if(check.length>0){
            return res.status(400).json({"message":"User already exist"})
        }
        bcrypt.hash(password, 5, async(err, secure_password)=> {
           if(err){
            console.log(err)
           }else{
            const user=new Usermodel({name,mobile,email,password:secure_password});
            await user.save();
            res.status(201).json({"message":"Account Created successfully"})
           }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({"message":"Getting error while creating account"})
    }
};

// const register=("/register",async(req,res)=>{
//     const {name,mobile,email,password}=req.body
//     try {
//         bcrypt.hash(password,5,async(err,secure_passord)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 const result=new UserModel({name,mobile,email,password:secure_passord})
//                 await result.save()
//                 res.json({message:"User Registeration Successful"})
//             }
//         })
        
//     } catch (err) {
//         console.log(err)
//         console.log("Something went wrong")
        
//     }
// })


const login = async (req, res) => {

const {email,password}=req.body;
    try {
          // Input validation -/check that email and password are present in  body
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required." });
    }
        const user=await Usermodel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(result){
                    const token=jwt.sign({userId:user[0]._id},process.env.key );
                    res.status(201).json({"token":token,"name":user[0].name,"message":"Login Successfuly"})
                }else{
                    res.status(401).json({"message":"Either email or password mistmatch"})
                }
            });
        }else{
            res.status(401).json("Wrong credential")
        }
    } catch (err) {
        console.log(err);
         res.status(500).json({"err":"Getting err while loging"})
    }
};

module.exports = {
  login,
  register,
};