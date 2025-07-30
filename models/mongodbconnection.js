import mongoose from "mongoose"

const mongodbconnection = async()=>{
    try{
       const response =  await mongoose.connect(process.env.MONGODB_URL)
       console.log("database connected")

    }
    catch(error){
        console.log("unable to connect database", error)
    }
}


export default mongodbconnection