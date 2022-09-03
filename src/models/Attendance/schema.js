import mongoose from 'mongoose';

export default {
  subject: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  isPresent: {
    type: Boolean,
    required: true,
  },
};
