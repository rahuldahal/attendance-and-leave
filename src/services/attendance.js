import Attendance from '../models/Attendance';

export async function createAttendance(data) {
  try {
    return await Attendance.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAll({ populate }) {
  try {
    if (!populate) {
      return await Attendance.find({}).exec();
    }

    return await Attendance.find({})
      .populate({
        path: 'student',
        populate: {
          path: 'user',
        },
      })
      .populate({
        path: 'teacher',
        populate: {
          path: 'user',
        },
      })
      .populate({
        path: 'subject',
        populate: {
          path: 'course',
        },
      })
      .exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllBySubjectId({ subject, date }) {
  try {
    return await Attendance.find({ subject, date })
      .populate({
        path: 'student',
        populate: {
          path: 'user',
        },
      })
      .populate({
        path: 'teacher',
        populate: {
          path: 'user',
        },
      })
      .populate({
        path: 'subject',
        populate: {
          path: 'course',
        },
      })
      .exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllByStudentId({ student, populate }) {
  try {
    if (!populate) {
      return await Attendance.find({ student })
        .populate({
          path: 'student',
          populate: {
            path: 'user',
          },
        })
        .populate({
          path: 'teacher',
          populate: {
            path: 'user',
          },
        })
        .populate({
          path: 'subject',
          populate: {
            path: 'course',
          },
        })
        .exec();
    }

    return await Attendance.find({ student }).populate(populateBy).exec();
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

export async function updateAttendance({ id, dataToBeUpdated }) {
  try {
    return await Attendance.findByIdAndUpdate(id, dataToBeUpdated, {
      new: true,
    }).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
