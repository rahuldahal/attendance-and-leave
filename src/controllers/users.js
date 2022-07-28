import User from '../models/User';
import isEmail from 'validator/lib/isEmail';
import { StatusCodes } from 'http-status-codes';
import { generateAccessToken } from '../utils/jwt';
import { isEmpty, isString } from '../utils/string';
import { LoginErrors } from '../constants/validationErrors';
import { createUser } from '../services/user';
import { userSchema } from '../schemas/user';

export async function createHandler(req, res) {
  const { body } = req;
  try {
    // use Joi to valdiate the request body
    const { validatedData } = await userSchema.validateAsync(body);

    // check for existing email
    const user = await User.prototype.doesEmailExist(validatedData.email);
    if (user) {
      return res.status(StatusCodes.CONFLICT).json({
        error: 'The email is already registered',
      });
    }

    // create a new user
    const createdUser = await createUser(validatedData);
    const { _id } = createdUser;

    return res.status(StatusCodes.CREATED).json({ message: { _id } });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.CONFLICT).json({ error });
  }
}

export async function loginHandler(req, res) {
  const { email, password } = req.body;
  if (isEmpty(email) || isEmpty(password)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['email', 'password'],
        message: LoginErrors.NO_EMAIL_PASSWORD,
      },
    });
  }
  if (!isEmail(email)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['email'],
        message: LoginErrors.NOT_VALID_EMAIL_TYPE,
      },
    });
  }
  if (!isString(password)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['password'],
        message: LoginErrors.NOT_VALID_PASSWORD_TYPE,
      },
    });
  }

  // authenticate user
  const user = await User.prototype.doesEmailExist(email);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['email'],
        message: LoginErrors.EMAIL_NOT_REGISTERED,
      },
    });
  }
  const isPasswordValid = await User.prototype.validatePassword(
    password,
    user.password
  );
  if (!isPasswordValid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: {
        fields: ['password'],
        message: LoginErrors.INCORRECT_PASSWORD,
      },
    });
  }
  // TODO: update lastLogin
  return res
    .status(StatusCodes.OK)
    .json({ accessToken: generateAccessToken({ email }) });
}
