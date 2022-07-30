import mongoose from 'mongoose';
import schema from './schema';

const leaveSchema = new mongoose.Schema(schema);

const Leave = new mongoose.model('Leave', leaveSchema);

export default Leave;
