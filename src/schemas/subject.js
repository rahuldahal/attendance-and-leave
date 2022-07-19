import Joi from 'joi';
import regex from '../constants/regex';

export const createSubjectSchema = Joi.object({
  semesterId: Joi.string().regex(regex.objectId).required(),
  name: Joi.string().regex(regex.onlyAlphabets).required(),
  creditHours: Joi.number().required(),
  progress: Joi.string().max(255).default(''),
  nextLecturePlan: Joi.string().max(255).default(''),
});
