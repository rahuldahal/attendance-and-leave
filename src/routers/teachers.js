import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import registerUser from '../middlewares/registerUser';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
} from '../controllers/teachers';
import validateTeacher from '../middlewares/validateTeacher';

const router = Router();

router.get(
  '/',
  authorize([userRoles.principal, userRoles.hod, userRoles.teacher]),
  getAllHandler
);
router.get(
  '/:id',
  authorize([userRoles.principal, userRoles.hod]),
  getOneHandler
);

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod]),
  registerUser,
  validateTeacher,
  createHandler
);

export default router;
