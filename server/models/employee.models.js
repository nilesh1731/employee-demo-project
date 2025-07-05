import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    employmentType:{
        type:String,
        enum:['Full-time', 'Part-time'],
        required:true
    }
},{
    timestamps:true
})

export const Employee = mongoose.model('Employee', employeeSchema);