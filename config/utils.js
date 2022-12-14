import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Debug from 'debug';


dotenv.config();
const debug = Debug('http');


dotenv.config();

module.exports = {

encodeToken: (id, isAdmin, company, email) => {
const payload = { id, isAdmin, company, email};
const option = { expiresIn: '100000000000d' };
const secret = process.env.SECRET_KEY;
return jwt.sign(payload, secret, option);
    },
};
