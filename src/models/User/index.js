import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { HASH_SALT } from '../utils/envs';
import schema from './schema';

const userSchema = new mongoose.Schema(schema);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    this.password = await bcrypt.hash(this.password, HASH_SALT);
    return next();
  } catch (error) {
    next(error);
  }
});

userSchema.pre('save', function (next) {
  this.picture = `${this.picture}&name=${this.firstName}+${this.lastName}`;
  return next();
});

userSchema.methods.validatePassword = async function (
  password,
  hashedPassword
) {
  return await bcrypt.compare(password, hashedPassword);
};

userSchema.methods.doesEmailExist = async function (value) {
  return await this.constructor.findOne({ email: value });
};

const User = new model('User', userSchema);

export default User;
