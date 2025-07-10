import { Request, Response } from 'express';
import { 
    manageCreateShmoozer, 
    manageReadAllShmoozers,
    manageReadShmoozer,
    manageFindShmoozerByName
} from "./shmoozer.manager";
import { ShmoozerType } from "../types/shmoozer.type";
import { errorHandler } from '../handlers/error.handler';
import { successHandler } from '../handlers/success.handler';

// Create
export const controlCreateShmoozer = async (req: Request, res: Response) => {
    const shmoozer = req.body as ShmoozerType;
    const exsitingShmoozer = await manageFindShmoozerByName(shmoozer.shmoozerName).catch(errorHandler(res, 400));
    if(exsitingShmoozer) {
        errorHandler(res, 409)(new Error(`Shmoozer with name ${shmoozer.shmoozerName} already exists.`));
        return;
    }
    const createShmoozerResult = await manageCreateShmoozer(shmoozer).catch(errorHandler(res, 400));
    if(createShmoozerResult)
        successHandler(res, `Created new shmoozer (shmoozer id: ${shmoozer._id}).`, createShmoozerResult, 200);
};

// Read All
export const controlReadAllShmoozers = async (req: Request, res: Response) => {
    const shmoozers = await manageReadAllShmoozers().catch(errorHandler(res, 400));
    if(shmoozers)
        successHandler(res, `Read all shmoozers.`, shmoozers, 200);
};

//Read One
export const controlReadShmoozer = async (req: Request, res: Response) => {
    const { id: shmoozerId } = req.params;
    const shmoozer = await manageReadShmoozer(shmoozerId).catch(errorHandler(res, 400));
    if(shmoozer) 
        successHandler(res, `Read 1 shmoozer (shmoozer id: ${shmoozerId}).`, shmoozer, 200);
};

// Find Shmoozer by Name for login
export const controlFindShmoozeByName = async (req: Request, res: Response) => {
    const { shmoozerName } = req.params;
    const shmoozer = await manageFindShmoozerByName(shmoozerName).catch(errorHandler(res, 400));
    if(shmoozer) 
        successHandler(res, `Login successful for shmoozer: ${shmoozerName}.`, shmoozer, 200);
    else{
        res.status(201).json({ message: `Shmoozer with name ${shmoozerName} not found.`, data: null });
        console.log(`Shmoozer with name ${shmoozerName} not found.`);
    }
};