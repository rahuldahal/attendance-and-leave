import {
  createHandler,
  getAllHandler,
  getOneHandler,
  getAllCoursesOfHodHandler,
} from '../controllers/hods';
import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import validateHOD from '../middlewares/validateHod';
import registerUser from '../middlewares/registerUser';

const router = Router();

router.get('/', authorize([userRoles.principal]), getAllHandler);
router.get('/courses', authorize([userRoles.hod]), getAllCoursesOfHodHandler);
router.get('/:id', authorize([userRoles.principal]), getOneHandler);

router.post(
  '/',
  authorize([userRoles.principal]),
  registerUser,
  validateHOD,
  createHandler
);

export default router;
