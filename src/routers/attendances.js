import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import { createHandler } from '../controllers/attendances';
import validateAttendance from '../middlewares/validateAttendance';

const router = Router();

router.post(
  '/',
  authorize([userRoles.teacher, userRoles.hod, userRoles.principal]),
  validateAttendance,
  createHandler
);

export default router;
