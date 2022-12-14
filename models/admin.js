import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    isDeleted: { 
        type: Boolean, 
        default: false 
    },
    password:{ 
        type: String, 
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: new Date() 
    },
    updatedAt: { 
        type: Date, 
        default: new Date() 
    },
    deletedAt: Date
    },
   
);



export default adminSchema