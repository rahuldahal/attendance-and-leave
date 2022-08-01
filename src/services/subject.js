import Subject from '../models/Subject';

export async function createSubject(data) {
  try {
    return await Subject.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllSubjects({ populateBy }) {
  try {
    if (!populateBy) {
      return await Subject.find({}).exec();
    }

    return await Subject.find({}).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await Subject.findById(id).exec();
    }

    return await Subject.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
