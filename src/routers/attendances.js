import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import validateAttendance from '../middlewares/validateAttendance';
import {
  createHandler,
  getAllBySubjectHandler,
  getAllHandler,
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
  '/:id',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  getOneHandler
);
router.get(
  '/subjects/:subjectId',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  getAllBySubjectHandler
);

router.post(
  '/',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  validateAttendance,
  createHandler
);

router.patch('/:id', authorize([userRoles.hod, userRoles.principal]), updateHandler)

export default router;
