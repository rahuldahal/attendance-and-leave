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

export async function getAllByStudentId({ student, date, subject }) {
  try {
    const query = { student, date };
    return await Attendance.find(subject ? { ...query, subject } : query)
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

export async function getAllOfMonth({ student, date, subject }) {
  try {
    const query = { student, subject }; // TODO: remove the static date string
    const month = new Date(date).getMonth() + 1;

    const attendances = await Attendance.find(query).exec();
    console.log(attendances);
    const filteredAttendances = attendances.filter((attendance) => {
      const { date: dateFromDB } = attendance;
      const monthFromDB = new Date(dateFromDB).getMonth() + 1;

      if (month === monthFromDB) {
        return attendance;
      }
    });

    return filteredAttendances;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
