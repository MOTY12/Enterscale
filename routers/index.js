import express from "express"
import adminRouter from "./admin"
import surveyRouter from "./survey"


const router = express();


//routes
router.use('/api/v1', adminRouter);
router.use('/api/v1', surveyRouter);

module.exports = router;
