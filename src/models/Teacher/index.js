import mongoose from 'mongoose';
import schema from './schema';

const teacherSchema = new mongoose.Schema(schema);

const Teacher = new mongoose.model('Teacher', teacherSchema);

export default Teacher;
