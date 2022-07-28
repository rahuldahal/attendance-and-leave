import joi from 'joi';
import regex from '../constants/regex';

// TODO: handle error messages https://stackoverflow.com/a/54657686
export const userSchema = joi.object({
  fullName: joi
    .string()
    .regex(regex.onlyAlphabetsAndSpaces)
    .min(3)
    .max(30)
    .required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(16).required(),
  picture: joi
    .string()
    .uri()
    .default('https://ui-avatars.com/api/?background=random'),
  roles: joi.array().items(joi.string()),
  lastLogin: joi.date(),
});
