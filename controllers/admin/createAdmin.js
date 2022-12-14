import {  adminModel } from "../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt';



const createAdmin = async (req, res) => {

    const { name, email, company, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    let option = {
        name: name,
        email: email,
        company: company,
        password: hashed
    };
    try {
        //check if admin already exisits
        const checkAdmin = await adminModel.find({ email: email }).exec();
        if (checkAdmin.length > 0) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "Admin has already been been created",
                status: StatusCodes.BAD_REQUEST,
                success: true,
            })
            return;
        } else {
            // insert data into the db
            await new adminModel(option).save();
            res.status(StatusCodes.OK).json({
                message: "Admin has been created successfully",
                status: StatusCodes.OK,
                success: true,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export default createAdmin;