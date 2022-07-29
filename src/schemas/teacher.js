import Joi from 'joi';
import regex from '../constants/regex';

export const teacherSchema = Joi.object({
  userId: Joi.string().regex(regex.objectId).required(),
  subjects: Joi.array().items(Joi.string().regex(regex.objectId)).required(),
  workingHours: Joi.array().items(
    Joi.object().keys({
      start: Joi.date(),
      end: Joi.date(),
    })
  ),
});
