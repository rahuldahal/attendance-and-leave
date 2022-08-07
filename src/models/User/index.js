import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import schema from './schema';

const userSchema = new mongoose.Schema(schema);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    next(error);
  }
});

userSchema.pre('save', function (next) {
  const splittedName = this.fullName.split(' ');
  const joinedName = splittedName.join('+');

  this.picture = `${this.picture}&name=${joinedName}`;
  return next();
});

userSchema.methods.validatePassword = async function (
  password,
  hashedPassword
) {
  return await bcrypt.compare(password, hashedPassword);
};

userSchema.methods.doesEmailExist = async function (value) {
  return await this.constructor.findOne({ email: value }).select('+password');
};

const User = new mongoose.model('User', userSchema);

export default User;
