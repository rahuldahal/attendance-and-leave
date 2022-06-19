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
  },
  picture: {
    type: String,
    default: 'https://ui-avatars.com/api/?background=random',
  },
  roles: {
    type: Array,
    default: [],
  },
  lastLogin: {
    type: Date,
    default: new Date(),
  },
  timestamps: true,
};
