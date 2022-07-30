import { Router } from 'express';
import { createHandler } from '../controllers/attendances';
import validateAttendance from '../middlewares/validateAttendance';

const router = Router();

router.post('/', validateAttendance, createHandler);

export default router;
