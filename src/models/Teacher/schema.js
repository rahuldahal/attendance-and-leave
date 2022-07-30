import mongoose from 'mongoose';

export default {
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  subjectIds: [
    {
      type: mongoose.Types.ObjectId, // TODO: add ref. to Subject schema https://stackoverflow.com/a/18002078
    },
  ],
  workingHours: [
    {
      type: Object,
    },
  ],
};
