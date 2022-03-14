
const express=require("express");

const mongoose=require("mongoose")

const app=express();
const connect=()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/banksystem")
}
const userSchema=new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        middleName:{type:String, required:false},
        lastName:{type:String,required:true},
        age:{type:String,required:true},
        email:{type:String,required:true}
        ,address:{type:String,required:true},
       gender:{required:true},
       type:{required:false},
    },
    {
        timestamps:true
    }
    );

    const User=mongoose.model("/user",userSchema);


    const branchSchema=new mongoose.Schema(
        {
             name:{type:String,required:true}
             ,addresss:{type:String,required:true},
                  
             IFSC:{type:String,required:true},
             MICR:{type:String,required:true}
        },
        {
            timestamps:true,
            versionKey:false
        }
    )

    const Branch=mongoose.model("/branch",branchSchema)

    const Masteracc=new mongoose.Schema(
        {
            balance: {type:Number, required:true}
        }
    ,  
    {userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
    
    },
     {     Branch:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"branch",
                    required:true
                  }
        }
    ,      {
            timestamps:true
        }
    )
    
    const Master=mongoose.model("master",MasterSchema);

    const savingSchema=new mongoose.Schema(
        {
            account_number:{type:Number,required:true},
            balance :{type:Number,required:true},
    interestRate :{type:Number,required:true }
        },{
            timestamps:true
        }
    )
    
    const Saving=mongoose.model("saving",savingsSchema);

    const FixedSchema=new mongoose.Schema(
        {
            account_number: {type:String,required:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number, required:true},
    startDate:{type:Date},
    maturityDate:{type:Date},
        },
    
        {
            timestamps:true
        }
    )
    
    const Fixed=mongoose.model("fixed",FixedSchema);


    app.get("/user",async(req,res)=>{
        try {
            const user=await User.find().lean().exec();
            return res.status(200).send({user:user});
        } catch (error) {
            return res.stauts(500).send({messege:"somethinfg went worng"});
        }
    })

    app.listen(5600, async()=>{
        try {
            await connect();
            console.log("listening on port 5600");
        } catch (error) {
            console.log(error);
        }
    })
    




    


 


   