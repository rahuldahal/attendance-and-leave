import mongoose from 'mongoose';
import schema from './schema';

const attendanceSchema = new mongoose.Schema(schema);

const Attendance = new mongoose.model('Attendance', attendanceSchema);

export default Attendance;
