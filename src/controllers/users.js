import User from '../models/User';
import { StatusCodes } from 'http-status-codes';
import {
  USER_VALIDATION_FAILED,
  VALIDATION_ERROR,
} from '../constants/mongoose';

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
