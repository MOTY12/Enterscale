import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import questionSchema from "./question";


const surveySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        // required: true

    },
    companyId:{
        type: String,
        required: true
    },
    email:{
        type: String,
        // required: true
    },
    questions:[questionSchema],
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
});

export default surveySchema