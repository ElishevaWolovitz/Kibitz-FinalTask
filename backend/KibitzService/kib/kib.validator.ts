import Joi from 'joi';

export const kibBodySchema = Joi.object({
    kibName: Joi.string().required(),
    shmoozerId: Joi.string().hex().length(24).required(), //hex and length to make it fit with the ObjectId type in MongoDB
    text: Joi.string().max(200).required(),
    media: Joi.string().uri().optional(),
    likes: Joi.number().integer().min(0).optional(),
    createdAt: Joi.date().optional(),
})

export const kibIdParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
  });

  export const kibUpdateBodySchema = Joi.object({
    kibName: Joi.string().optional(),
    shmoozerId: Joi.string().hex().length(24).optional(),
    text: Joi.string().optional(), 
    media: Joi.string().uri().optional(),
    likes: Joi.number().integer().min(0).optional(),
    createdAt: Joi.date().iso().optional()
  }).min(1); // This makes sure that at least one field is required - inorder to update

