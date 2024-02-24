import { Router } from "express";
import {
    registerUser,
    loginUser,
    changeNumber
} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middlerware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/changenumber").get(changeNumber)

export default router 