import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import registerUser from '../middlewares/registerUser';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
} from '../controllers/hods';
import validateHOD from '../middlewares/validateHod';

const router = Router();

router.get('/', authorize([userRoles.principal]), getAllHandler);
router.get(
  '/:id',
  authorize([userRoles.principal]),
  getOneHandler
);

router.post(
  '/',
  authorize([userRoles.principal]),
  registerUser,
  validateHOD,
  createHandler
);

export default router;
