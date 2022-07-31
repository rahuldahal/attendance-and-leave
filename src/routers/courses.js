import { Router } from 'express';
import userRoles from '../constants/userRoles';
import { courseSchema } from '../schemas/course';
import authorize from '../middlewares/authorize';
import validateBody from '../middlewares/validateBody';
import { createHandler } from '../controllers/courses';

const router = Router();

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod]),
  validateBody(courseSchema),
  createHandler
);

export default router;
