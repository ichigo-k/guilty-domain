import User from "../../models/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(500).json({ message: "Please fill all fields" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful", activeUser: user });

    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
};

