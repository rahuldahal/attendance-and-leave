import { StatusCodes } from 'http-status-codes';
import { createTeacher } from '../services/teacher';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const { _id } = await createTeacher(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
