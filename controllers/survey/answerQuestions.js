import { surveyModel, answerModel } from "../../middleware/dbConnect";

import { StatusCodes } from "http-status-codes";

const answerQuestions = async (req, res) => {
    try {

        let option = {
            
        }

        const surveyId = req.params.surveyId;
        const { fullName, email, answers } = req.body;

       
        const survey = await surveyModel.findOne({ _id: surveyId });
        if(!survey){
            res.status(StatusCodes.NOT_FOUND).json({
                status: StatusCodes.NOT_FOUND,
                success: false,
                message: "Survey not found"
            })
            return;
        }

         //check if survey and user exist
         const surveyUser = await answerModel.find({ 
            surveyId: surveyId,
            email: email 
        }).exec();
        if(surveyUser.length > 0){
            res.status(StatusCodes.BAD_REQUEST).json({
                status: StatusCodes.BAD_REQUEST,
                success: false,
                message: "You have already answered this survey"
            })
            return;
        }
        
        //submit answers with email, questionId and name to the survey
        const newAnswers = await answerModel.create({
            fullName,
            email,
            answers,
            surveyId: surveyId,
            companyId: survey.companyId
        });
        newAnswers.save();

        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            success: true,
            data: newAnswers
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default answerQuestions;