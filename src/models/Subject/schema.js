import mongoose from 'mongoose';

export default {
  name: {
    type: String,
    required: true,
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  semester: {
    type: Number,
  },
  year: {
    type: Number,
  },
  code: {
    type: String,
    required: true,
  },
};
