import Joi from 'joi';
import regex from '../constants/regex';
import leaveStatus from '../constants/leaveStatus';

export const leaveSchema = Joi.object({
  student: Joi.string().regex(regex.objectId).required(),
  startDate: Joi.date().required(), // YYYY-MM-DD
  endDate: Joi.date().required(),
  reason: Joi.string().regex(regex.onlyAlphabetsAndSpaces).max(255).required(),
  status: Joi.string()
    .valid(
      leaveStatus.submitted,
      leaveStatus.received,
      leaveStatus.pending,
      leaveStatus.approved,
      leaveStatus.rejected
    )
    .default(leaveStatus.submitted),
  remaining: Joi.number().min(0).max(15).default(15),
});
