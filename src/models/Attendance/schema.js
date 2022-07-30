import mongoose from 'mongoose';

export default {
  subjectId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  teacherId: {
    type: mongoose.Types.ObjectId, // TODO: add ref. to Course schema
  },
  studentId: {
    type: mongoose.Types.ObjectId, // TODO: add ref. to Course schema
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
