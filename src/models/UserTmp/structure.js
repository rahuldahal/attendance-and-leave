export default {
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
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
    minLength: [8, 'Password must be of at least 8 characters.'],
  },
  joinedOn: {
    type: Date,
    default: new Date(),
  },
  lastLogin: {
    type: Date,
    default: new Date(),
  },
  picture: {
    type: String,
    default: 'https://ui-avatars.com/api/?background=random',
  },
  roles: {
    type: Array,
    default: [],
  },
};
