import Joi from 'joi';

export const shmoozerBodySchema = Joi.object({
    shmoozerName: Joi.string().required(),
    displayName: Joi.string().required()
})

export const shmoozerIdParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
});