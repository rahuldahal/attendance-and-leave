import { StatusCodes } from 'http-status-codes';
import { createSubject, getAllSubjects, getOneById } from '../services/subject';

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

export async function getAllHandler(req, res) {
  const { query } = req;
  try {
    let subjects;
    if (!query || !query.populateBy) {
      subjects = await getAllSubjects({});
    } else {
      subjects = await getAllSubjects({ populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ data: { subjects } });
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

    return res.status(StatusCodes.OK).json({ data: { subject } });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
