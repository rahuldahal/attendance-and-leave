import { StatusCodes } from 'http-status-codes';
import { createSubject } from '../services/subject';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    // TODO: check for duplicate subject code
    const { _id } = await createSubject(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
