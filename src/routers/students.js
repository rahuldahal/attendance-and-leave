import { Router } from 'express';
import userRoles from '../constants/userRoles';
import registerUser from '../middlewares/registerUser';
import authorize from '../middlewares/authorize';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
} from '../controllers/students';
import validateStudent from '../middlewares/validateStudent';

const router = Router();

router.get(
  '/',
  authorize([userRoles.principal, userRoles.hod, userRoles.teacher]),
  getAllHandler
);
router.get(
  '/:id',
  authorize([userRoles.principal, userRoles.hod, userRoles.teacher]),
  getOneHandler
);

router.post('/', registerUser, validateStudent, createHandler);

export default router;
