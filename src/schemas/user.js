import Joi from 'joi';
import regex from '../constants/regex';
import userRoles from '../constants/userRoles';

// TODO: handle error messages https://stackoverflow.com/a/54657686
export const userSchema = Joi.object({
  fullName: Joi.string()
    .regex(regex.onlyAlphabetsAndSpaces)
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(16).required(),
  picture: Joi.string()
    .uri()
    .default('https://ui-avatars.com/api/?background=random'),
  role: Joi.string().valid(
    userRoles.principal,
    userRoles.hod,
    userRoles.teacher,
    userRoles.student
  ),
  lastLogin: Joi.date(),
});
