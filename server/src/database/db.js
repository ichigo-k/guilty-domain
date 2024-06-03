import mongoose from "mongoose"

export async function connectDB(){
    try{

       await  mongoose
        .connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log("connected to database")
        })
    }catch(error){
        console.log("Something went wrong")
        console.log(error)
    }
}



