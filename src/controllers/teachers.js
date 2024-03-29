import { StatusCodes } from 'http-status-codes';
import {
  createTeacher,
  getAllTeachers,
  getOneById,
  getOneBySubjectId,
  getOneTeacherByUserId,
} from '../services/teacher';

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

export async function getAllHandler(req, res) {
  const { query } = req;

  try {
    if (query && query.userId) {
      const { userId } = query;
      const teacher = await getOneTeacherByUserId({ userId });

      return res.status(StatusCodes.OK).json({ teacher });
    } else {
      let teachers;

      if (!query || !query.populateBy) {
        teachers = await getAllTeachers({});
      } else {
        teachers = await getAllTeachers({ populateBy: query.populateBy });
      }

      const total = teachers.length;

      return res.status(StatusCodes.OK).json({ teachers, total });
    }
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneBySubjectHandler(req, res) {
  const { id } = req.params;
  try {
    const teacher = await getOneBySubjectId({
      subjectId: id,
      populateBy: 'user',
    });

    return res.status(StatusCodes.OK).json({ teacher });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  const { query } = req;
  try {
    let teacher;
    if (!query || !query.populateBy) {
      teacher = await getOneById({ id });
    } else {
      teacher = await getOneById({ id, populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ teacher });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
