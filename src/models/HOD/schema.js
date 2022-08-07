import mongoose from 'mongoose';

export default {
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courses: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Course',
    },
  ],
  workingHours: [
    {
      type: Object,
    },
  ],
};
