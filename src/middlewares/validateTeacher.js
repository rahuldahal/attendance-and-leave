import { StatusCodes } from 'http-status-codes';
import { teacherSchema } from '../schemas/teacher';

export default async function validateTeacher(req, res, next) {
  const { userId } = req;
  const { subjectIds, workingHours } = req.body;
  try {
    // use Joi to valdiate the request body
    const validatedData = await teacherSchema.validateAsync({
      userId,
      subjectIds,
      workingHours,
    });

    if (validatedData) {
      req.validatedData = validatedData;

      return next();
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
