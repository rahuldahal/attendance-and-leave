import { Router } from 'express';
import { createHandler } from '../controllers/leaves';
import validateLeave from '../middlewares/validateLeave';

const router = Router();

router.post('/', validateLeave, createHandler);

export default router;
