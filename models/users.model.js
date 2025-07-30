import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String
    },
    name : {
        type : String
    },
    image : {
        type : String
    }
    
})

const Users = new mongoose.model("Users", userSchema)
export default Users