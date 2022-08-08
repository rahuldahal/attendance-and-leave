import mongoose from 'mongoose';

export default {
  student: {
    type: mongoose.Types.ObjectId,
    ref: 'Student',
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
