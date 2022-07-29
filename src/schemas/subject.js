import Joi from 'joi';
import regex from '../constants/regex';

export const subjectSchema = Joi.object({
  name: Joi.string().regex(regex.onlyAlphabets).required(),
  courseId: Joi.string().regex(regex.objectId).required(),
  creditHours: Joi.number().required(),
});
