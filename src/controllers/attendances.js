import { StatusCodes } from 'http-status-codes';
import {
  createAttendance,
  getAll,
  getAllBySubjectId,
  getAllByStudentId,
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

    const total = attendances.length;

    return res.status(StatusCodes.OK).json({ attendances, total });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getAllBySubjectHandler(req, res) {
  const { subject } = req.params;
  const { query } = req;

  let date;

  if (!query || !query.date) {
    date = new Date().toISOString().split('T')[0];
  } else {
    date = query.date;
  }

  try {
    const attendances = await getAllBySubjectId({
      subject,
      date,
    });

    const total = attendances.length;

    return res.status(StatusCodes.OK).json({ attendances, total });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getAllByStudentHandler(req, res) {
  const { student } = req.params;
  const { query } = req;
  try {
    let attendances;
    if (!query || !query.populateBy) {
      attendances = await getAllByStudentId({ student });
    } else {
      attendances = await getAllByStudentId({
        student,
        populateBy: query.populateBy,
      });
    }

    const total = attendances.length;

    return res.status(StatusCodes.OK).json({ attendances, total });
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
