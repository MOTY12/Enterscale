import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question:{
        type: String,
    },
})

export default questionSchema;