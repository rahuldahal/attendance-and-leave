import Joi from 'joi';
import regex from '../constants/regex';

export const studentSchema = Joi.object({
  user: Joi.string().regex(regex.objectId).required(),
  batch: Joi.number().max(new Date().getFullYear()).required(),
  course: Joi.string().regex(regex.objectId).required(),
  semester: Joi.number(),
});
