import { deleteUser } from '../services/user';
import { StatusCodes } from 'http-status-codes';
import { studentSchema } from '../schemas/student';

export default async function validateStudent(req, res, next) {
  const { userId } = req;
  const { courseId, semester, batch } = req.body;
  try {
    // use Joi to valdiate the request body
    const validatedData = await studentSchema.validateAsync({
      userId,
      courseId,
      semester,
      batch,
    });

    if (validatedData) {
      req.validatedData = validatedData;

      return next();
    }
  } catch (error) {
    await deleteUser({id: userId});
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
