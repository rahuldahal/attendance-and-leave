import Joi from 'joi';
import regex from '../constants/regex';

export const createStudentSchema = Joi.object({
  userId: Joi.string().regex(regex.objectId).required(),
  batch: Joi.number().max(new Date().getFullYear()).required(),
  courseId: Joi.string().regex(regex.objectId).required(),
  semester: Joi.number(),
});
