import { StatusCodes } from 'http-status-codes';
import { createCourse } from '../services/course';

export async function createHandler(req, res) {
  const { validatedData } = req;
  try {
    // create a new course
    const course = await createCourse(validatedData);
    const { _id } = course;

    return res.status(StatusCodes.CREATED).json({ message: { _id } });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.CONFLICT).json({ error });
  }
}
