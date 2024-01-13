import { Router } from "express";
import {
    registerUser
} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middlerware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = Router()

router.route("/register").post(registerUser)

export default router 