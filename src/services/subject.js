import Subject from '../models/Subject';

export async function createSubject(data) {
  try {
    return await Subject.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
