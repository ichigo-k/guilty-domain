import express from "express"
import "dotenv/config"
import cors from "cors"
import {connectDB} from "./database/db.js"
import authRouter from "./routes/auth.js"

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/api/v1",authRouter)


try{
    connectDB()
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    })
}
catch(error){
    console.log("Something went wrong")
    console.log(error)
}
