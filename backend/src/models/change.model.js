import mongoose, {Schema} from "mongoose";


const changeSchema = new Schema(
    {
        changeNumber: {
            type: String,
            required: true,
            unique: true,
            index: true,
        }
    },
    {
        timestamps: true
    }
)
//changeSchema.methods.currentChangeNumber
// const currentChangeNumber  = async function
// (changeNumber){
//     // Query to find the latest change document
//     const currentChangeNumber = await Change.findOne({}, {}, { sort: { 'createdAt': -1 } })
//       .then(latestChange => {
//         console.log('Latest change:', latestChange);
//       })
//       if (!currentChangeNumber){
//         throw new ApiError(503,"Error fetching latest change")
//       }
// }
// currentChangeNumber();

export const Change = mongoose.model("Change", changeSchema)