import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
} from '../controllers/leaves';
import validateLeave from '../middlewares/validateLeave';

const router = Router();

router.get(
  '/',
  authorize([userRoles.principal, userRoles.hod, userRoles.teacher]),
  getAllHandler
);
router.get(
  '/:id',
  authorize([
    userRoles.principal,
    userRoles.hod,
    userRoles.teacher, // TODO: only if the attendance is created by the teacher
    userRoles.student, // TODO: only if the attendance is of the student in question
  ]),
  getOneHandler
);

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod, userRoles.student]),
  validateLeave,
  createHandler
);

export default router;
