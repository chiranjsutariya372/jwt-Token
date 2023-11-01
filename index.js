const express= require('express');
const bcrypt=require('bcryptjs')
const cookieParser=require('cookie-parser');
const db = require('./config/db');
const router = require('./routes/route');



const app = express();
app.use(express.json())
app.use(cookieParser())

app.use(router)

app.listen(8090,()=>{
    console.log("listening on port 8090");
    db()
})