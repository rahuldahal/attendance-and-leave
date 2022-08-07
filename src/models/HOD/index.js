import mongoose from 'mongoose';
import schema from './schema';

const hodSchema = new mongoose.Schema(schema);

const HOD = new mongoose.model('HOD', hodSchema);

export default HOD;
