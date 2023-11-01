const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const user = require('../model/Schema')

const home=async(req,res)=>{
    res.send('Welcome')
}
const register=async(req,res)=>{
    const {username,email,password} =req.body
    const security=await bcrypt.hash(password,10)
    let data=await user.create({username,email,password:security})
    res.send(data)
}
const login=async(req,res) =>{
    const {email,password}=req.body
    let find=await user.findOne({email})

    if(!find)
        return res.send("user not found")

        let passmatch=await bcrypt.compare(password,find.password)


    if(find.email !== email || !passmatch)
        return res.send("password and email is not match")

        let token=jwt.sign({id:find},"fhdkjhdfk")
        console.log(token);

        res.cookie('token', token).send("welcome")   
}

module.exports ={home,register,login}