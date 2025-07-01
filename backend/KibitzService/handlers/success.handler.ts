import { Response } from "express";

export const successHandler = <T>(res: Response, message: string, data: T, statCode: number) => 
    res.status(statCode).json({ message: message, data: data });