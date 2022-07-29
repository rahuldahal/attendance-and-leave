import { StatusCodes } from 'http-status-codes';

export default function validateBody(schema) {
  return async (req, res, next) => {
    const { body } = req;
    try {
      // use Joi to valdiate the request body
      const validatedData = await schema.validateAsync(body);

      if (validatedData) {
        req.validatedData = validatedData;

        return next();
      }
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error });
    }
  };
}
