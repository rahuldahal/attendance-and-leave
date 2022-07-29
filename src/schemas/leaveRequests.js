import Joi from 'joi';
import regex from '../constants/regex';
import leaveStatus from '../constants/leaveStatus';

export const attendanceSchema = Joi.object({
  userId: Joi.string().regex(regex.objectId).required(),
  startFrom: Joi.date().required(),
  endAt: Joi.date().required(),
  reason: Joi.string().regex(regex.onlyAlphabets).max(255).required(),
  status: Joi.string().valid(
    leaveStatus.submitted,
    leaveStatus.received,
    leaveStatus.pending,
    leaveStatus.accepted,
    leaveStatus.rejected
  ),
});
