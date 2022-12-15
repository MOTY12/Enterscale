import { surveyModel, answerModel } from "../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";

const getSurvey = async (req, res) => {
    try {
        const surveyId = req.params.surveyId;
        const survey = await surveyModel.findOne({ _id: surveyId });
        if(!survey){
            res.status(StatusCodes.NOT_FOUND).json({
                status: StatusCodes.NOT_FOUND,
                success: false,
                message: "Survey not found"
            })
            return;
        }

        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            success: true,
            data: survey
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getSurvey;