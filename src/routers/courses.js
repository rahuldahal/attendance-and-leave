import { Router } from 'express';
import userRoles from '../constants/userRoles';
import { courseSchema } from '../schemas/course';
import authorize from '../middlewares/authorize';
import validateBody from '../middlewares/validateBody';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
} from '../controllers/courses';

const router = Router();

router.get('/', authorize([userRoles.principal, userRoles.hod]), getAllHandler);
router.get(
  '/:id',
  authorize([userRoles.principal, userRoles.hod]),
  getOneHandler
);

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod]),
  validateBody(courseSchema),
  createHandler
);

export default router;
