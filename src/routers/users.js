import { createHandler, loginHandler } from '../controllers/users';
import { Router } from 'express';

const router = Router();

router.post('/', createHandler);
router.post('/login', loginHandler);

export default router;
