import { StatusCodes } from 'http-status-codes';
import { createAttendance } from '../services/attendance';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const { _id } = await createAttendance(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
