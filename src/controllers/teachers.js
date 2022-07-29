import { StatusCodes } from 'http-status-codes';
import { createTeacher } from '../services/teacher';

export async function createHandler(req, res) {
  const { validatedData } = req.body;

  try {
    const { _id } = await createTeacher(validatedData);

    return res.send(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.send(StatusCodes.BAD_REQUEST).json({ error });
  }
}
