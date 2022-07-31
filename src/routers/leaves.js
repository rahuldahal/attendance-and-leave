import { Router } from 'express';
import userRoles from '../constants/userRoles';
import authorize from '../middlewares/authorize';
import { createHandler } from '../controllers/leaves';
import validateLeave from '../middlewares/validateLeave';

const router = Router();

router.post(
  '/',
  authorize([userRoles.principal, userRoles.hod, userRoles.student]),
  validateLeave,
  createHandler
);

export default router;
