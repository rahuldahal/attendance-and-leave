import mongoose from 'mongoose';

export default {
  name: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
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
