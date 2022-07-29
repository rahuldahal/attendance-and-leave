import User from '../models/User';
import { userSchema } from '../schemas/user';
import { createUser } from '../services/user';
import { StatusCodes } from 'http-status-codes';

export default async function (req, res, next) {
  const { fullName, email, password, picture, role } = req.body;

  try {
    // use Joi to valdiate the request body
    const validatedData = await userSchema.validateAsync({
      fullName,
      email,
      password,
      picture,
      role,
    });

    if (validatedData) {
      // check for existing email
      const user = await User.prototype.doesEmailExist(validatedData.email);
      if (user) {
        return res.status(StatusCodes.CONFLICT).json({
          error: 'The email is already registered',
        });
      }

      // create a new user
      const createdUser = await createUser(validatedData);
      req.userId = createdUser._id.toString();

      return next();
    }
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
