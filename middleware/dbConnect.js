import { DBConnection } from "../config/db";

import adminSchema from '../models/admin';
import questionSchema from "../models/question";
import surveySchema from "../models/survey";
import answerSchema from "../models/answer";



//visitors db model
const adminModel = DBConnection.model("admin", adminSchema)
const questionModel = DBConnection.model("Question", questionSchema)
const surveyModel = DBConnection.model("Survey", surveySchema)
const answerModel = DBConnection.model("Answer", answerSchema)




module.exports = {
    adminModel,
    questionModel,
    surveyModel,
    answerModel
};
