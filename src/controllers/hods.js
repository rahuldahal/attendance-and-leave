import { StatusCodes } from 'http-status-codes';
import { createHOD, getAllHODs, getOneById } from '../services/hod';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const { _id } = await createHOD(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}

export async function getAllHandler(req, res) {
  const { query } = req;
  try {
    let HODs;
    if (!query || !query.populateBy) {
      HODs = await getAllHODs({});
    } else {
      HODs = await getAllHODs({ populateBy: query.populateBy });
    }

    const total = HODs.length;

    return res.status(StatusCodes.OK).json({ HODs, total });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  const { query } = req;
  try {
    let HOD;
    if (!query || !query.populateBy) {
      HOD = await getOneById({ id });
    } else {
      HOD = await getOneById({ id, populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ HOD });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
