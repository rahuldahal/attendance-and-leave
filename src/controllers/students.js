import { StatusCodes } from 'http-status-codes';
import { createStudent } from '../services/student';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const { _id } = await createStudent(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
