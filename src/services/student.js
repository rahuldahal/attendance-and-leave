import Student from '../models/Student';

export async function createStudent(data) {
  try {
    return await Student.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
