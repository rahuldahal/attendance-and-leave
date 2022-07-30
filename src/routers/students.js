import { Router } from 'express';
import registerUser from '../middlewares/registerUser';
import { createHandler } from '../controllers/students';
import validateStudent from '../middlewares/validateStudent';

const router = Router();

router.post('/', registerUser, validateStudent, createHandler);

export default router;
