export default {
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  picture: {
    type: String,
    default: 'https://ui-avatars.com/api/?background=random',
  },
  role: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    default: new Date(),
  },
};
