import Joi from 'joi';
import regex from '../constants/regex';

// TODO: handle error messages https://stackoverflow.com/a/54657686
export const createUserSchema = Joi.object({
  fullName: Joi.string().regex(regex.onlyAlphabets).min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(16).required(),
  picture: Joi.string()
    .uri()
    .default('https://ui-avatars.com/api/?background=random'),
  roles: Joi.array().items(Joi.string()),
  lastLogin: Joi.date(),
});
