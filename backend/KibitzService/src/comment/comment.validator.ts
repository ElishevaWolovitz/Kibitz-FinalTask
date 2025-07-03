import Joi from 'joi';

export const commentBodySchema = Joi.object({
    commentName: Joi.string().required(),
    shmoozerId: Joi.string().hex().length(24).required(), //hex and length to make it fit with the ObjectId type in MongoDB
    kibId: Joi.string().hex().length(24).required(),
    parentCommentId: Joi.string().hex().length(24),
    text: Joi.string().max(200).required(),
    media: Joi.string().uri().optional(),
    createdAt: Joi.date().optional(),
})

export const commentIdParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
  });