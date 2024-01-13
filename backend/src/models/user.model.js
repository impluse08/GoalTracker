import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, //cloudinary URL
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        inviteKey:{
            type: String
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
/*
The selected code is a pre-save middleware function that is used to hash the user's password before saving it to the database. This is done to ensure that the password is stored in a secure format.

The code checks if the password field has been modified (i.e. if it is being updated). If the password has not been modified, the function returns without doing anything.

If the password has been modified, the code hashes it using the bcrypt library. The second argument (10) specifies the number of rounds to use when hashing the password.

Finally, the hashed password is assigned to the password field and the function returns.
*/

userSchema.methods.isPasswordCorrect = async function
(password){
    return await bcrypt.compare(password, this.password)
}
/*
The selected code is a method in the userSchema that is used to compare a given password with the hashed password stored in the database. The method is asynchronous, which means it returns a Promise.

The code uses the bcrypt library to hash the given password and compare it with the hashed password in the database. If the passwords match, the method returns true, otherwise it returns false.

This method is used in the authenticate method of the User model to verify the password of a user when they try to log in.
*/

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)