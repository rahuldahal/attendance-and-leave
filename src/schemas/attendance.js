import Joi from 'joi';
import regex from '../constants/regex';

export const attendanceSchema = Joi.object({
  subject: Joi.string().regex(regex.objectId).required(),
  teacher: Joi.string().regex(regex.objectId).required(),
  student: Joi.string().regex(regex.objectId).required(),
  date: Joi.date().iso().required(),
  isPresent: Joi.boolean().required(),
});
