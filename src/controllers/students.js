import { StatusCodes } from 'http-status-codes';
import {
  createStudent,
  getAllStudents,
  getOneById,
  getStudentsByCourseAndSemester,
} from '../services/student';

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

export async function getAllHandler(req, res) {
  const { query } = req;
  try {
    let students;

    if (query && query.course && query.semester) {
      const { course, semester } = query;
      students = await getStudentsByCourseAndSemester({ course, semester });
    } else if (!query || !query.populateBy) {
      students = await getAllStudents({});
    } else {
      students = await getAllStudents({ populateBy: query.populateBy });
    }

    const total = students ? students.length : 0;

    return res.status(StatusCodes.OK).json({ students, total });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  const { query } = req;
  try {
    let student;
    if (!query || !query.populateBy) {
      student = await getOneById({ id });
    } else {
      student = await getOneById({ id, populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
