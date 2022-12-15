import express from 'express';

const router = express();

import auth from '../middleware/auth';
import { createSurvey, generateLink} from '../controllers/survey/createSurvey';
import answerQuestions from '../controllers/survey/answerQuestions';
import getAnswerToSurvey from '../controllers/survey/getAnswer';
import getSurvey from '../controllers/survey/getSurvey';

router.post('/createSurvey', auth, createSurvey);
router.post('/answerQuestions/:surveyId', answerQuestions);
router.get('/getAnswerToSurvey/:surveyId', auth, getAnswerToSurvey)
router.get('/generateLinkForSurvey/:surveyId', auth, generateLink)
router.get('/getSurvey/:surveyId', auth, getSurvey)




module.exports = router;
