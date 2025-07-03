import Joi from 'joi';

export const commentBodySchema = Joi.object({
    commentName: Joi.string().required(),
    shmoozerId: Joi.string().hex().length(24).required(), //hex and length to make it fit with the ObjectId type in MongoDB
    text: Joi.string().max(200).required(),
    createdAt: Joi.date().optional(),
})

export const commentIdParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
  });