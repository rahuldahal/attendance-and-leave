import { createHandler } from '../controllers/courses';
import { Router } from 'express';

const router = Router();

router.post('/', createHandler);

export default router;
