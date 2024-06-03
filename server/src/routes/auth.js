import express from "express";
import { login } from "../controllers/auth/login.js";
import { register } from "../controllers/auth/register.js";


const router = express.Router()


router.route("/login").post(login)
router.route("/register").post( register)


export default router