const jwt=require('jsonwebtoken')
const user = require("../model/Schema");
const match=async(req,res,next)=>{
let {token}=req.cookies
    if(token){
        let decode=jwt.verify(token,"fhdkjhdfk")
        req.data=await user.findById(decode.id)
        console.log(req.data);
        next()
    }
    else{
        res.send("please login")
    }
}
 module.exports= match  