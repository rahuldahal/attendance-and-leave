import mongoose from 'mongoose';

export default {
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
  },
  batch: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
};
