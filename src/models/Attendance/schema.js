import mongoose from 'mongoose';

export default {
  subjectId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  teacherId: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  studentId: {
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
