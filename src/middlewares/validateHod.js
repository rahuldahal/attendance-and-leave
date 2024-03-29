import { StatusCodes } from 'http-status-codes';
import { hodSchema } from '../schemas/hod';
import { deleteUser } from '../services/user';

export default async function validateHOD(req, res, next) {
  const { userId } = req;
  const { courses, workingHours } = req.body;
  try {
    // use Joi to valdiate the request body
    const validatedData = await hodSchema.validateAsync({
      user: userId,
      courses,
      workingHours,
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
