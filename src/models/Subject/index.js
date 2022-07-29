import mongoose from 'mongoose';
import schema from './schema';

const subjectSchema = new mongoose.Schema(schema);

const Subject = new mongoose.model('Subject', subjectSchema);

export default Subject;
