import mongoose from 'mongoose';

export default {
  studentId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  remaining: {
    type: Number,
  },
};
