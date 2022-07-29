import { Router } from 'express';
import { subjectSchema } from '../schemas/subject';
import validateBody from '../middlewares/validateBody';
import { createHandler } from '../controllers/subjects';

const router = Router();

router.post('/', validateBody(subjectSchema), createHandler);

export default router;
