import express from 'express';

const router = express();


import auth from '../middleware/auth';
import superAdminAuth from '../middleware/superAdminAuth';
import createAdmin from '../controllers/admin/createAdmin';
import adminLogin from '../controllers/admin/adminLogin';
import adminProfile from '../controllers/admin/adminProfile';





router.post('/createAdmin', auth, superAdminAuth, createAdmin);
router.post('/login', adminLogin);
router.get('/view_Profile', auth, adminProfile);






module.exports = router;