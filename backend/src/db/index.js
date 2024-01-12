import mongoose from "mongoose";
import { DB_NAME } from "../constanst.js"
import dotenv from "dotenv";
dotenv.config({
    path: "../.env"
})

const connectDB = (async () => {
    try {
        // console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected to DB HOST: ${conectionInstance.connection.host}}`);
    } catch (error) {
        console.log("MONGODB connection failed", error);
        process.exit(1);
    }
})

export default connectDB;

/*
process.exit(1); is a command in Node.js that terminates the Node.js process with an exit code. The process.exit() method is used to forcefully end the Node.js process, and the argument passed to it is treated as the exit code.

Here's a breakdown of the statement:

    process.exit(): This is a method provided by the process global object in Node.js. It forcefully terminates the Node.js process. If you provide a number as an argument, it is treated as the exit code.

    1: The number 1 is often used as a convention to indicate that the process is exiting with an error. In Unix-like operating systems, an exit code of 0 typically means success, while a non-zero exit code indicates an error or some other abnormal termination.

So, process.exit(1); is used to exit the Node.js process with an exit code of 1, signaling that the process is terminating due to an error or abnormal condition.
*/