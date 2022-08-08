import mongoose from 'mongoose';

export default {
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
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
