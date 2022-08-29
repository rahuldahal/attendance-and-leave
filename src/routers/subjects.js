import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import { subjectSchema } from '../schemas/subject';
import validateBody from '../middlewares/validateBody';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
} from '../controllers/subjects';

const router = Router();

router.get(
  '/',
  authorize([
    userRoles.principal,
    userRoles.hod,
    userRoles.teacher,
    userRoles.student,
  ]), // TODO: only allow students involved with the course in question
  getAllHandler
);
router.get(
  '/:id',
  authorize([userRoles.principal, userRoles.hod, userRoles.teacher]),
  getOneHandler
);

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod]),
  validateBody(subjectSchema),
  createHandler
);

export default router;
