import { Response } from "express";

export const errorHandler = (res: Response, statusCode: number) =>
  (error: Error) => res.status(statusCode).json({ error: error.message });