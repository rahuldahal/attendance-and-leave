import Attendance from '../models/Attendance';

export async function createAttendance(data) {
  try {
    return await Attendance.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
