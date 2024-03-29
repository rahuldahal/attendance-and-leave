import Subject from '../models/Subject';
import { StatusCodes } from 'http-status-codes';
import { createSubject, getAllSubjects, getOneById } from '../services/subject';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const subject = await Subject.prototype.doesSubjectExist(
      validatedData.code
    );

    if (subject) {
      return res.status(StatusCodes.CONFLICT).json({
        error: 'The subject with that code is already registered',
      });
    }

    const { _id } = await createSubject(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}

export async function getAllHandler(req, res) {
  const { query } = req;
  try {
    let subjects;

    if (query && query.course && query.semester) {
      const { course, semester } = query;
      subjects = await getAllSubjects({ query: { course, semester } });
    } else if (!query || !query.populateBy) {
      subjects = await getAllSubjects({});
    } else {
      subjects = await getAllSubjects({ populateBy: query.populateBy });
    }

    const total = subjects.length;

    return res.status(StatusCodes.OK).json({ subjects, total });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  const { query } = req;
  try {
    let subject;
    if (!query || !query.populateBy) {
      subject = await getOneById({ id });
    } else {
      subject = await getOneById({ id, populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ subject });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
