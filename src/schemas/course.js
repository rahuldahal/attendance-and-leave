import joi from 'joi';
import regex from '../constants/regex';
import { universities, durations } from '../constants/courses';

export const courseSchema = joi.object({
  courseName: joi
    .string()
    .regex(regex.onlyAlphabetsAndSpaces)
    .max(120)
    .required(),
  shortName: joi.string().regex(regex.courseShortName).max(10).required(),
  affiliatedTo: joi
    .string()
    .valid(
      universities.tribhuvan,
      universities.kathmandu,
      universities.pokhara,
      universities.purwanchal,
      universities.mahendra,
      universities.lumbini
    ),
  duration: joi
    .string()
    .valid(
      durations.twoYears,
      durations.fourYears,
      durations.sixSemesters,
      durations.eightSemesters
    ),
});
