const mongoose=require("mongoose")

const db=async()=>{
    try {
        await mongoose.connect("mongodb+srv://chiranjsutariya372:chiranj@cluster0.vzywpba.mongodb.net/?retryWrites=true&w=majority")
        console.log("mongodb connect");
    } catch (error) {
        console.log(error);
    }
}

module.exports =db;