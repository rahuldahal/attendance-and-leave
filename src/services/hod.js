import Course from '../models/Course';
import HOD from '../models/HOD';

export async function createHOD(data) {
  try {
    return await HOD.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllCoursesOfHod({ hodId }) {
  try {
    const data = await HOD.findById(hodId).exec();
    const courses = data.courses.map(async (course) => {
      return await Course.findById(course);
    });

    console.log(courses);
    return { courses };
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
