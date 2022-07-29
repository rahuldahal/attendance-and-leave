import Joi from 'joi';
import regex from '../constants/regex';

export const hodSchema = Joi.object({
  userId: Joi.string().regex(regex.objectId).required(),
  courseId: Joi.array().items(Joi.string().regex(regex.objectId)).required(),
  workingHours: Joi.array().items(
    Joi.object().keys({
      start: Joi.date(),
      end: Joi.date(),
    })
  ),
});
