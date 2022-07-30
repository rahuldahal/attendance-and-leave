import mongoose from 'mongoose';
import schema from './schema';

const studentSchema = new mongoose.Schema(schema);

const Student = new mongoose.model('Student', studentSchema);

export default Student;
