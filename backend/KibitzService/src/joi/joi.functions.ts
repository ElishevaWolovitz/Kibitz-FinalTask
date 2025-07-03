import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const runValidation = <T>(schema: Joi.ObjectSchema<T>, data: T, res: Response, next: NextFunction ): void => {
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map(getErrorMessage);
    res.status(400).json({ error: errorMessages });
  } else {
    next();
  }
};

const getErrorMessage = (detail: Joi.ValidationErrorItem): string => detail.message;

export const validateBody = (schema: Joi.ObjectSchema) => {
    const validateRequestBody = (req: Request, res: Response, next: NextFunction): void => 
    runValidation(schema, req.body, res, next);
    return validateRequestBody;
};

export const validateParams = (schema: Joi.ObjectSchema) => {
    const validateRequestParams = (req: Request, res: Response, next: NextFunction): void =>
    runValidation(schema, req.params, res, next);
    return validateRequestParams;
  };
