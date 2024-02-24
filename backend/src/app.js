import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import morgan from "morgan";
import multer from 'multer';
import {User} from "./models/user.model.js"
import { Change } from "./models/change.model.js";
import {asyncHandler} from "./utils/asyncHandler.js"
import mongoose from "mongoose";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,

}))

// const sadf =  User.findOne({ username: "zero one"});
// const gg = User.findById(sadf._id)
// console.log(gg.schema.obj);
// console.log(sadf.schema.paths.password);
// // console.log(JSON.stringify(sadf, null, 2));


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import
app.use(morgan('dev'));

import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter)  //middlerware

// https://localhost:8080/api/v1/users/register


export { app }

/*
Notes of this code 
Express

import express from "express"

    Express.js is a popular Node.js web application framework used for building web applications and APIs. This line imports the Express.js module.

Cookie Parser

import cookieParser from "cookie-parser"

    cookie-parser is an Express middleware that parses incoming cookies from the HTTP request header and populates req.cookies with an object keyed by the cookie names. This middleware allows easier handling and manipulation of cookies in your Express application.

CORS (Cross-Origin Resource Sharing)

import cors from "cors"

    CORS is a security feature implemented in web browsers that controls access to resources on a different origin/domain. When making requests from a frontend application to a different backend server (a different domain or port), CORS can prevent the requests from being blocked due to security restrictions.

    cors is an Express middleware that handles Cross-Origin Resource Sharing by allowing or restricting access to resources based on defined policies. It sets the necessary HTTP headers to enable CORS in your Express application.

In summary, these lines import and set up middleware for an Express.js application. express is the core framework, cookie-parser helps parse incoming cookies, and cors handles Cross-Origin Resource Sharing, enabling communication between different origins in a web application or API.


process.env is a Node.js global object that provides access to the environment variables. Environment variables are variables outside of the application's code that can vary depending on the environment where the application is running (e.g., development, staging, production).

Express Setup:

    const app = express(): Creates an instance of the Express application.

Middleware Configuration:

    app.use(cors({ origin: process.env.CORS_ORIGIN })): Configures CORS (Cross-Origin Resource Sharing) middleware to handle cross-origin requests. It allows requests from the specified origin, which is typically defined in the CORS_ORIGIN environment variable.

    app.use(express.json({ limit: "16kb" })): Middleware to parse JSON payloads in requests. The limit option restricts the payload size to 16 kilobytes.

    app.use(express.urlencoded({ extended: true, limit: "16kb" })): Middleware to parse URL-encoded data (form data) in requests. The extended option allows nested objects in the encoded data, and limit sets the payload size limit to 16 kilobytes.

    app.use(express.static("public")): Serves static files from the "public" directory. This allows direct access to static files (e.g., images, CSS, JS) hosted in the specified directory.

    app.use(cookieParser()): Integrates the cookie-parser middleware to parse and handle cookies in incoming requests.

Route Handling:

    app.use("/api/v1/users", userRouter): Mounts the userRouter middleware at the specified base path (/api/v1/users). This means that all routes defined within the userRouter will be prefixed with /api/v1/users.

*/