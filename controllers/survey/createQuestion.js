import { questionModel } from " ../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";

const createQuestion = async (req, res) => {
    try {
        const question = req.body;
        const companyId = req.params.companyId;

        const newQuestion = new questionModel({
            question,
            companyId,
            options,
        });
        await newQuestion.save();
        res.status(StatusCodes.CREATED).json({
            status: StatusCodes.CREATED,
            success: true,
            data: newQuestion,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default createQuestion;
