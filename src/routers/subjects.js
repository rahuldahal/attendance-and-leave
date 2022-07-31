import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import { subjectSchema } from '../schemas/subject';
import validateBody from '../middlewares/validateBody';
import { createHandler } from '../controllers/subjects';

const router = Router();

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod]),
  validateBody(subjectSchema),
  createHandler
);

export default router;
