import {  adminModel } from "../../middleware/dbConnect";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt';
import utils from '../../config/utils';



const adminLogin = async (req, res) => {

   
    try {
        //check if admin already exisits

    const {email, password} = req.body;
    let admin = await adminModel.findOne({ email }).exec();
    if(!admin){
        res.status(StatusCodes.NOT_FOUND).json({
            message: "Invalid login credentials",
            status: StatusCodes.NOT_FOUND,
            success: true,
        })
        return;
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if(!isMatch){
        res.status(StatusCodes.BAD_REQUEST).json({
            message: "Invalid login credentials",
            status: StatusCodes.BAD_REQUEST,
            success: true,
        })
       return;
    }
    
    const token = utils.encodeToken(admin.id, admin.isAdmin, admin.company, admin.email);


    res.status(StatusCodes.OK).json({
        status: 200,
        success: true,
        data: admin,
        token: token
    })


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default adminLogin;