import { surveyModel, answerModel } from "../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";

const getAnswerToSurvey = async (req, res) => {
    try {
        const surveyId = req.params.surveyId;
        const companyId = req.user.id;
        const survey = await surveyModel.findOne({ _id: surveyId });
        let option = {
            page: req.query.page || 1,
            limit: req.query.limit || process.env.PAGING_LIMIT,
            sort: { _id: -1 },
            // populate: {
            //     path: 'questionId'
            // }
        };
        if(!survey){
            res.status(StatusCodes.NOT_FOUND).json({
                status: StatusCodes.NOT_FOUND,
                success: false,
                message: "Survey not found"
            })
            return;
        }

        
        const result = await answerModel.paginate({
            // companyId: companyId,
            surveyId: surveyId
        }, option);

        // get all questionsId from result
        // const questionsId = result.docs.map((item) => {
        //     return item.answers.map((answer) => {
        //         // console.log(answer.questionId);
        //         return answer.questionId;
        //     })
        // })


        //get all questionsId from survey
        // const surveyQuestionsId = survey.questions.map((item) => {
        //     return item._id;
        // })

        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getAnswerToSurvey;

