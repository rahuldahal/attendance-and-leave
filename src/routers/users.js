import { createHandler, loginHandler } from '../controllers/users';
import validateBody from '../middlewares/validateBody';
import { userSchema } from '../schemas/user';
import { Router } from 'express';

const router = Router();

router.post('/', validateBody(userSchema), createHandler);
router.post('/login', loginHandler);

export default router;
