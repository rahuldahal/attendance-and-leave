import {
  VALIDATION_ERROR,
  USER_VALIDATION_FAILED,
} from '../constants/mongoose';
import User from '../models/User';
import isEmail from 'validator/lib/isEmail';
import { StatusCodes } from 'http-status-codes';
import { generateAccessToken } from '../utils/jwt';
import { isEmpty, isString } from '../utils/string';
import { LoginErrors } from '../constants/validationErrors';

export async function create(req, res) {
  const { body } = req;
  const user = new User(body);
  try {
    const createdUser = await user.save();
    const { _id } = createdUser;
    return res.status(StatusCodes.CREATED).json({ message: { _id } });
  } catch (error) {
    const { message, name } = error;
    if (name === VALIDATION_ERROR) {
      let errorsOnly = message.split(USER_VALIDATION_FAILED)[1];
      let errorsArray = errorsOnly.split(',');
      let readableErrors = errorsArray.map((error) =>
        error.split(':')[1].trim()
      );
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: readableErrors });
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: message });
  }
}

export async function login(req, res) {
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
