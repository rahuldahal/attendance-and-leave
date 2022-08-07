import { StatusCodes } from 'http-status-codes';
import {
  createAttendance,
  getAll,
  getAllBySubjectId,
  getOneById,
  updateAttendance,
} from '../services/attendance';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const { _id } = await createAttendance(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}

export async function getAllHandler(req, res) {
  const { query } = req;
  try {
    let attendances;
    if (!query || !query.populate === 'all') {
      attendances = await getAll({});
    } else {
      attendances = await getAll({
        populate: true,
      });
    }

    return res.status(StatusCodes.OK).json({ attendances });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getAllBySubjectHandler(req, res) {
  const { subjectId } = req.params;
  const { query } = req;
  try {
    let attendances;
    if (!query || !query.populateBy) {
      attendances = await getAllBySubjectId({ subjectId });
    } else {
      attendances = await getAllBySubjectId({
        subjectId,
        populateBy: query.populateBy,
      });
    }

    return res.status(StatusCodes.OK).json({ attendances });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  const { query } = req;
  try {
    let attendance;
    if (!query || !query.populateBy) {
      attendance = await getOneById({ id });
    } else {
      attendance = await getOneById({ id, populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ attendance });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function updateHandler(req, res) {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedAttendance = await updateAttendance({
      id,
      dataToBeUpdated: body,
    });

    return res.status(StatusCodes.OK).json({ updatedAttendance });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
