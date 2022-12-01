import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import validateAttendance from '../middlewares/validateAttendance';
import {
  createHandler,
  getAllByStudentHandler,
  getAllBySubjectHandler,
  getAllHandler,
  getAllOfMonthHandler,
  getOneHandler,
  updateHandler,
} from '../controllers/attendances';

const router = Router();

router.get(
  '/',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  getAllHandler
);
router.get(
  '/my-attendance',
  authorize([userRoles.student]),
  getAllOfMonthHandler
);
router.get(
  '/:id',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  getOneHandler
);
router.get(
  '/subjects/:subject',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  getAllBySubjectHandler
); // allow iff the subject is taught by the teacher
router.get(
  '/students/:student',
  authorize([userRoles.student, userRoles.hod, userRoles.principal]),
  getAllByStudentHandler
);

router.post(
  '/',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  validateAttendance,
  createHandler
);

router.patch(
  '/:id',
  authorize([userRoles.hod, userRoles.principal]),
  updateHandler
);

export default router;
