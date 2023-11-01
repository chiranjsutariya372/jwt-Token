const jwt=require('jsonwebtoken')
const user = require("../model/Schema");
const match=async(req,res,next)=>{
let {token}=req.cookies
    if(token){
        let decode=jwt.verify(token,"fhdkjhdfk")
        console.log(decode);
        let {id}=decode
        req.user=await user.findById(id)
        next()
    }
    else{
        res.send("please login")
    }
}
 module.exports= match  