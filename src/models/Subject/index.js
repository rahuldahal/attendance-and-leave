import mongoose from 'mongoose';
import schema from './schema';

const subjectSchema = new mongoose.Schema(schema);


subjectSchema.methods.doesSubjectExist = async function (code) {
  return await this.constructor.findOne({ code });
};

const Subject = new mongoose.model('Subject', subjectSchema);

export default Subject;
