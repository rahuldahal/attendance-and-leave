import { createCourse } from '../services/course';
import { courseSchema } from '../schemas/course';
import { StatusCodes } from 'http-status-codes';

export async function createHandler(req, res) {
  const { body } = req;
  try {
    // use Joi to valdiate the request body
    const validatedData = await courseSchema.validateAsync(body);

    // create a new course
    const course = await createCourse(validatedData);
    const { _id } = course;

    return res.status(StatusCodes.CREATED).json({ message: { _id } });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.CONFLICT).json({ error });
  }
}
