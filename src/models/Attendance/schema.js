import mongoose from 'mongoose';

export default {
  subject: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isPresent: {
    type: Boolean,
    required: true,
  },
};
