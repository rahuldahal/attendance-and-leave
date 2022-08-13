import Student from '../models/Student';

export async function createStudent(data) {
  try {
    return await Student.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllStudents({ populateBy }) {
  try {
    if (!populateBy) {
      return await Student.find({}).exec();
    }

    return await Student.find({}).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await Student.findById(id).exec();
    }

    return await Student.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getStudentsByCourseAndSemester({ course, semester }) {
  try {
    return await Student.find({ course, semester })
      .populate('course user')
      .exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
