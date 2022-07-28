import Course from '../models/Course';

export async function createCourse(data) {
  try {
    return await Course.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
