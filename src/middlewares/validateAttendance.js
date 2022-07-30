import { StatusCodes } from 'http-status-codes';
import { attendanceSchema } from '../schemas/attendance';

export default async function validateAttendance(req, res, next) {
  const { body } = req;
  try {
    // use Joi to valdiate the request body
    const validatedData = await attendanceSchema.validateAsync(body);

    if (validatedData) {
      req.validatedData = validatedData;

      return next();
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
