import Leave from '../models/Leave';

export async function createLeave(data) {
  try {
    return await Leave.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllLeaves({ populateBy }) {
  try {
    if (!populateBy) {
      return await Leave.find({}).exec();
    }

    return await Leave.find({}).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await Leave.findById(id).exec();
    }

    return await Leave.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
