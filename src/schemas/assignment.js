import Joi from 'joi';

export const createAssignmentSchema = Joi.object({
  subjectId: Joi.string().regex(regex.objectId).required(),
  title: Joi.string().max(100).required(),
  description: Joi.string().max(255),
  assignedOn: Joi.date().required(),
  dueDate: Joi.date().required(),
  marksCarried: Joi.number().required(),
  submittedBy: Joi.array().items(Joi.string().regex(regex.objectId)).required(),
});
