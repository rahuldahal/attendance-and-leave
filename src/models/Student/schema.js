import mongoose from 'mongoose';

export default {
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  courseId: {
    type: mongoose.Types.ObjectId, // TODO: add ref. to Course schema
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
