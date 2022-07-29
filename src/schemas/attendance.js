import Joi from 'joi';

export const attendanceSchema = Joi.object({
  subjectId: Joi.string().regex(regex.objectId).required(),
  teacherId: Joi.string().regex(regex.objectId).required(),
  studentId: Joi.string().regex(regex.objectId).required(),
  date: Joi.date().required(),
  isPresent: Joi.boolean().required(),
});
