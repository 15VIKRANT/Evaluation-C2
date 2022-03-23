
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName : { type:String, required: true, minlength:3, maxlength:30},
        lastName : { type:String, required: false, minlength:3, maxlength:30 },
        age : { type:Number, required: true },
        email : { type:Number, required: true, unique:true },
        profileImages: [{ type: String, required: true }],
        
    },{
        timestamps:true,
        versionKey:false,
    }
)

module.exports = mongoose.model("user", userSchema);