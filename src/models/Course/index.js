import mongoose from 'mongoose';
import schema from './schema';

const courseSchema = new mongoose.Schema(schema);

const Course = new mongoose.model('Course', courseSchema);

export default Course;
