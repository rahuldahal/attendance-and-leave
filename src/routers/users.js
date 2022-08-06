import { Router } from 'express';
import { checkAuth, loginHandler } from '../controllers/users';

const router = Router();

router.get('/auth', checkAuth);
router.post('/login', loginHandler);

export default router;
