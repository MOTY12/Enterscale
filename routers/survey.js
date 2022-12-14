import express from 'express';

const router = express();

import auth from '../middleware/auth';
import superAdminAuth from '../middleware/superAdminAuth';
import createSurvey from '../controllers/survey/createSurvey';
import answerQuestions from '../controllers/survey/answerQuestions';
import getAnswerToSurvey from '../controllers/survey/getAnswer';

router.post('/createSurvey', auth, createSurvey);
router.post('/answerQuestions/:surveyId', answerQuestions);
router.get('/getAnswerToSurvey/:surveyId', auth, getAnswerToSurvey)




module.exports = router;
