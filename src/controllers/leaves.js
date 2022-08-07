import { StatusCodes } from 'http-status-codes';
import { createLeave, getAllLeaves, getOneById } from '../services/leave';

export async function createHandler(req, res) {
  const { validatedData } = req;

  try {
    const { _id } = await createLeave(validatedData);

    return res.status(StatusCodes.CREATED).json({ _id });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}

export async function getAllHandler(req, res) {
  const { query } = req;
  try {
    let leaves;
    if (!query || !query.populateBy) {
      leaves = await getAllLeaves({});
    } else {
      leaves = await getAllLeaves({ populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ leaves });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function getOneHandler(req, res) {
  const { id } = req.params;
  const { query } = req;
  try {
    let leave;
    if (!query || !query.populateBy) {
      leave = await getOneById({ id });
    } else {
      leave = await getOneById({ id, populateBy: query.populateBy });
    }

    return res.status(StatusCodes.OK).json({ leave });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
