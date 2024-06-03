import User from "../../models/user.js";
import bcrypt from "bcrypt"

export const register = async (req,res)=>{
    try {
        const {name, email, password, role} = req.body
        if(!name || !email || !password){
            return res.status(400).json({message: "Please fill all fields"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(500).json({message: "This email already exists"})
        }
        else{
            const hashedpassword = await  bcrypt.hash(password, 10)
        
            await User.create({
                name: name,
                email: email,
                password: hashedpassword
            })
            const registeredUser = await User.findOne({email})
            return res.status(200).json({message: "User created successfully", activeUser: registeredUser})
        }
    } catch (error) {
        console.log("Something went wrong")
        console.log(error)
        return res.status(500).json({message: "Something went wrong try again later ", error: error.Error})
    }
}