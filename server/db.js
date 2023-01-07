
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDb= async ()=>{
    try{
        await mongoose.connect('mongodb+srv://shivam:shivam143@cluster0.yt4sy.mongodb.net/mernuser')
       console.log(`mongodb connection is successfull`)
    }catch(error){
        console.log(`${error}`)
    }
};
module.exports=connectDb;


