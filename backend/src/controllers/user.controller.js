import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
import {Change} from "../models/change.model.js"
import {uploadOnCloudinary} from "../utils/cloudnary.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";



const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return {accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}

const registerUser = asyncHandler( async (req, res) =>{
    const {fullName, email, username, password} = req.body
    if ([fullName, email, username, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username },{ email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    console.log(username, fullName );
    const user = await User.create({
        fullName,
        email,
        username,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registerd Succesfully")
    )
})

const loginUser = asyncHandler( async (req, res) => {
    const {username, email, password } = req.body

    console.log(username, email, password);
    if((!username && !email)){
        throw new ApiError(400, "username or email and password is required")
    }

    const doesUserExists = await User.findOne({
        $or: [{username}, {email}]
    })
    if(!doesUserExists){
        throw new ApiError(401, "username or email does not exists")
    }

    const isPasswordValidOfUser = await doesUserExists.isPasswordCorrect(password)

    if (!isPasswordValidOfUser) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(doesUserExists._id)

    console.log(accessToken, refreshToken);

    const loggedInUser = await User.findById(doesUserExists._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.
    status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})

const changeNumber = asyncHandler( async (req, res) => {
    const getLatestChange = async () => {
        try {
            const currentChangeNumber = await Change.findOne({}, {}, { sort: { 'createdAt': -1 } });
            const storedChangeNumber =  currentChangeNumber.changeNumber.replace('CHN', '');
            // console.log(storedChangeNumber)
            return parseInt(storedChangeNumber, 10);
        } catch (error) {
            console.error('Error fetching latest change:', error);
            throw error; // Rethrow the error to propagate it further
        }
    };
    
    // Invoke the function and store the return value
    const storedChangeNumber = await getLatestChange();
    console.log('Stored change number:', storedChangeNumber, typeof storedChangeNumber);

    // query to run a query for the latest change number
    const newChangeNumber = storedChangeNumber + 1;

    // Construct the new change number with padding
    const prefix = "CHN";
    const newChangeNumberString = prefix + newChangeNumber.toString().padStart(6, '0');
    // console.log(newChangeNumberString);
    // Create a new document in the database with the incremented change number
    await Change.create({ changeNumber: newChangeNumberString });
    // (function() {
    //     const prefix = "CHN";
    //     const newChangeNumberString  = prefix + storedChangeNumber.toString().padStart(6, '0'); // Adding some padding zeros
    //     (async () => 
    //     {
    //         await Change.create({
    //             changeNumber: storedChangeNumber
    //         })
    //     })();
    // })();
    return res.
    status(200)
    .json(
        new ApiResponse(
            200,
            {
                Change: newChangeNumberString
            },
            "changeNumber received Successfully"
        )
    )
})


export {
    registerUser,
    loginUser,
    changeNumber
} 