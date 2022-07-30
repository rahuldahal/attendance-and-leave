import Joi from 'joi';
import regex from '../constants/regex';

export const attendanceSchema = Joi.object({
  subjectId: Joi.string().regex(regex.objectId).required(),
  teacherId: Joi.string().regex(regex.objectId).required(),
  studentId: Joi.string().regex(regex.objectId).required(),
  date: Joi.date().iso().required(),
  isPresent: Joi.boolean().required(),
});
