import Joi from 'joi';
import regex from '../constants/regex';

export const createStudentSchema = Joi.object({
  userId: Joi.string().regex(regex.objectId).required(),
  batch: Joi.number().max(new Date().getFullYear()).required(),
  semester: Joi.string().regex(regex.objectId).required(),
  leaveRequest: Joi.object().keys({
    noOfDays: Joi.number().required(),
    reason: Joi.string().regex(regex.onlyAlphabets).max(255).required(),
  }),
});
