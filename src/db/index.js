import mongoose from "mongoose";
import { Db_NAME } from "../constants.js";

const connectDb=async()=>{
    try{
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`)
        console.log(`MONGODB Connected !! DB Host ${connectionInstance.connection.host}` );
    }catch(err){
        console.log("MONGODB connection err",err);
        process.exit(1);
    }
}

export default connectDb;