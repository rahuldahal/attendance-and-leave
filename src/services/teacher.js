import Teacher from '../models/Teacher';

export async function createTeacher(data) {
  try {
    return await Teacher.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
