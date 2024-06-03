import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }, 
    role:{
        type: String,
        default: "user"
    }, 
    created:{
        type: Date,
        default: Date.now()
    
    }
})


const user = mongoose.model("User", userSchema)
export default user