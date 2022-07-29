import Joi from 'joi';
import regex from '../constants/regex';

export const teacherSchema = Joi.object({
  userId: Joi.string().regex(regex.objectId).required(),
  subjectIds: Joi.array().items(Joi.string().regex(regex.objectId)).required(),
  workingHours: Joi.object().keys({
    start: Joi.number(), // TODO: match with regex
    end: Joi.number(),
  }),
});
