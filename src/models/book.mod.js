const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        like : { type:Number , required: true, default:0},
        coverImages : {type:URL,required: true},
        content : { type:Number, required: true },
        userId: {type:mongoose.Schema.Types.ObjectId, ref:"user",required:true },
    },{
        timestamps:true,
        versionKey:false,
    }
)

module.exports = mongoose.model("book", bookSchema);