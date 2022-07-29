import { Router } from 'express';
import { courseSchema } from '../schemas/course';
import { createHandler } from '../controllers/courses';
import validateBody from '../middlewares/validateBody';

const router = Router();

router.post('/', validateBody(courseSchema), createHandler);

export default router;
