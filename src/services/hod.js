import HOD from '../models/HOD';

export async function createHOD(data) {
  try {
    return await HOD.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllHODs({ populateBy }) {
  try {
    if (!populateBy) {
      return await HOD.find({}).exec();
    }

    return await HOD.find({}).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await HOD.findById(id).exec();
    }

    return await HOD.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
