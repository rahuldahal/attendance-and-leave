import { StatusCodes } from 'http-status-codes';
import { leaveSchema } from '../schemas/leave';

export default async function validateLeave(req, res, next) {
  const { body } = req;
  try {
    // use Joi to valdiate the request body
    const validatedData = await leaveSchema.validateAsync(body);

    if (validatedData) {
      req.validatedData = validatedData;

      return next();
    }
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
