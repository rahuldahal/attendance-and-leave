import Attendance from '../models/Attendance';

export async function createAttendance(data) {
  try {
    return await Attendance.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllBySubjectId({ subjectId, populateBy }) {
  console.log(populateBy);
  try {
    if (!populateBy) {
      return await Attendance.find({ subjectId }).exec();
    }

    return await Attendance.find({ subjectId }).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await Attendance.findById(id).exec();
    }

    return await Attendance.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
