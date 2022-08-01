import Course from '../models/Course';

export async function createCourse(data) {
  try {
    return await Course.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllCourses() {
  try {
    return await Course.find({});
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById(id) {
  try {
    return await Course.findById(id).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
