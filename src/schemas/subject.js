import Joi from 'joi';
import regex from '../constants/regex';

export const subjectSchema = Joi.object({
  name: Joi.string().regex(regex.onlyAlphabetsAndSpaces).required(),
  course: Joi.string().regex(regex.objectId).required(),
  semester: Joi.number().min(1).max(8).default(null),
  year: Joi.number().min(1).max(4).default(null),
  code: Joi.string().required(), // TODO: match with regex
});
