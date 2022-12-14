import { surveyModel } from "../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";

const createSurvey = async (req, res) => {
    try {
      const companyId = req.user.id;
        const { title, questions } = req.body;
        if(!title || !questions){
            res.status(StatusCodes.BAD_REQUEST).json({
                status: StatusCodes.BAD_REQUEST,
                success: false,
                message: "Please provide a title and survey"
            })
            return;
        }

        const newSurvey = new surveyModel({
            title,
            companyId,
            questions,
        });

        const link = `http://localhost:3000/survey/${newSurvey._id}`;
        // newSurvey.link = link;

        await newSurvey.save();
        res.status(StatusCodes.CREATED).json({
            status: StatusCodes.CREATED,
            success: true,
            data: newSurvey,
            link: link
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}


const generateLink = async (req, res) => {
    try {
        const surveyId = req.params.surveyId;
        const survey = await surveyModel.findOne({ _id:
        surveyId });
        if(!survey){
            res.status(StatusCodes.NOT_FOUND).json({
                status: StatusCodes.NOT_FOUND,
                success: false,
                message: "Survey not found"
            })
            return;
        }
        const link = `http://localhost:3000/survey/${survey._id}`;
        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            success: true,
            link: link
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}


export default createSurvey;