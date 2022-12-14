import { adminModel } from "../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";

const adminProfile = async (req, res) => {
    try {
        const admin = await adminModel.findById(req.user.id).select("-password");
        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            success: true,
            data: admin,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export default adminProfile;