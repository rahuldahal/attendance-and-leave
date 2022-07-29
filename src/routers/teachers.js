import { Router } from 'express';
import registerUser from '../middlewares/registerUser';
import { createHandler } from '../controllers/teachers';
import validateTeacher from '../middlewares/validateTeacher';

const router = Router();

router.post('/', registerUser, validateTeacher, createHandler);

export default router;
