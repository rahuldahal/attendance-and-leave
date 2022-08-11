import { Router } from 'express';
import { signOutHandler, loginHandler } from '../controllers/users';

const router = Router();

router.get('/signOut', signOutHandler);
router.post('/login', loginHandler);

export default router;
