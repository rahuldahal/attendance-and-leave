import { Router } from 'express';
import {
  signOutHandler,
  loginHandler,
  sendAuthInfo,
} from '../controllers/users';
import { authenticate } from '../middlewares/authenticate';

const router = Router();

router.get('/signOut', signOutHandler);
router.post('/login', loginHandler);
router.get('/checkAuth', authenticate, sendAuthInfo);

export default router;
