import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import registerUser from '../middlewares/registerUser';
import { createHandler } from '../controllers/teachers';
import validateTeacher from '../middlewares/validateTeacher';

const router = Router();

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod]),
  registerUser,
  validateTeacher,
  createHandler
);

export default router;
