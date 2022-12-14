import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
  // eslint-disable-next-line linebreak-style
  try {
    const header = req.headers.authorization.split(" ")[1];
    if (!header || header === '') return res.status(401).json({ status: 401, error: 'Unauthorized' });

    const options = { expiresIn: '1d' };

    const decode= jwt.verify(header, process.env.SECRET_KEY);
    req.user = decode;
  
    next();
  } catch (error) {
    return res.status(401).json({ status: 401, error: 'Invalid token!' });
  }

  return false;
};

export default auth;