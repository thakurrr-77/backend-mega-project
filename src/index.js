// require('dotenv').config({path:'./.env'})

import dotenv from "dotenv"

import mongoose from "mongoose"
import { Db_NAME } from "./constants.js"; 
import connectDb from "./db/index.js";
import app from "./app.js"

dotenv.config({path:"./.env"});


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("App is running at port ",process.env.PORT);
    })
})
.catch(err=>{
    console.log("Mongo Db connect failed !! ",err);
})
















/*

import express from "express"

const app=express();
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`);
        app.on("errror",(error)=>{
            console.log(error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log("App is listening on port ",process.env.PORT);
        })
    }catch(err){
        console.error("Error: ",err);
        throw err;
    }
})()
*/
