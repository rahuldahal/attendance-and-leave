import bcrypt from 'bcryptjs';
import userStructure from './structure';
import { Schema, model } from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';
import { isEmailUnique } from './validations';
import { HASH_SALT } from '../../constants/db';

const userSchema = new Schema(userStructure);

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

userSchema.path('email').validate(isEmail, 'You must provide a valid email');
userSchema
  .path('firstName')
  .validate(isAlpha, 'The first name should only contain alphabets');
userSchema
  .path('lastName')
  .validate(isAlpha, 'The last name should only contain alphabets');
userSchema
  .path('email')
  .validate(
    isEmailUnique,
    'The email you provided already exists on our database'
  );

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
