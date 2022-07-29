import { loginHandler } from '../controllers/users';
import { Router } from 'express';

const router = Router();

router.post('/login', loginHandler);

export default router;
