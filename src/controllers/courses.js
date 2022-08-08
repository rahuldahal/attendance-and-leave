import { StatusCodes } from 'http-status-codes';
import { createCourse, getAllCourses, getOneById } from '../services/course';

export async function createHandler(req, res) {
  const { validatedData } = req;
  try {
    // create a new course
    const course = await createCourse(validatedData);
    const { _id } = course;

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.CONFLICT).json({ error });
  }
}

export async function getAllHandler(req, res) {
  try {
    const courses = await getAllCourses();

    const total = courses.length;

    return res.status(StatusCodes.OK).json({ courses, total });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  try {
    const course = await getOneById(id);

    return res.status(StatusCodes.OK).json({ course });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
