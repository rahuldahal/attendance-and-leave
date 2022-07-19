import Joi from 'joi';
import regex from '../constants/regex';
import universities from '../constants/universities';

export const createCourseSchema = Joi.object({
  name: Joi.string().regex(regex.onlyAlphabets).max(30).required(),
  description: Joi.string().max(250).required(),
  affiliatedTo: Joi.string().valid(
    universities.tribhuvan,
    universities.kathmandu,
    universities.pokhara,
    universities.purwanchal,
    universities.mahendra,
    universities.lumbini
  ),
  semesterBased: Joi.boolean().default(true),
  noOfSemesters: Joi.number().default(8),
  noOfYears: Joi.number().default(4),
});
