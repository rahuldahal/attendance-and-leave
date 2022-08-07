import Joi from 'joi';
import regex from '../constants/regex';

export const hodSchema = Joi.object({
  user: Joi.string().regex(regex.objectId).required(),
  courses: Joi.array().items(Joi.string().regex(regex.objectId)).required(),
  workingHours: Joi.array().items(
    Joi.object().keys({
      start: Joi.string(),
      end: Joi.string(),
    })
  ),
});
