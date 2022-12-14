import mongoose from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

const answerSchema = new mongoose.Schema({
    fullName:{
        type: String,
    },
    email:{
        type: String,
    },
    answers: [{
        questionId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Survey'
        },
        answer:{
            type: String,
        },
    }],
    surveyId:{
        type: String,
    },
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
    deletedAt: Date
    
});

answerSchema.plugin(mongoosePaginate);

export default answerSchema
    
    