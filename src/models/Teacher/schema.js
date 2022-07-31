import mongoose from 'mongoose';

export default {
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subjectIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Subject',
    },
  ],
  workingHours: [
    {
      type: Object,
    },
  ],
};
