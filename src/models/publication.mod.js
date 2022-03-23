const mongoose = require("mongoose");

const publicSchema = new mongoose.Schema(
    {
        name : { type:String , required: true},
        bookId: {type:mongoose.Schema.Types.ObjectId, ref:"book",required:true }
    },{
        timestamps:true,
        versionKey:false,
    }
)

module.exports = mongoose.model("public", publicSchema);