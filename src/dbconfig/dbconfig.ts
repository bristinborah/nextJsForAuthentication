import mongoose from "mongoose";
require('dotenv').config({ path: 'MONGO_URI' });
const dotenv = require("dotenv");

dotenv.config();

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("Mongo DB connected successfully");
        })
        connection.on('error', (err)=>{
            console.log("MongoDB connection error" +err)
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
    }
}