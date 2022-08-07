import mongoose from 'mongoose';

export default {
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subjects: [
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
