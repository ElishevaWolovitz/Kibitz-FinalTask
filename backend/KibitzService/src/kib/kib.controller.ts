import { Request, Response } from 'express';
import { 
    manageCreateKib, 
    manageReadAllKibs, 
    manageReadKib, 
    manageUpdateKib, 
    manageDeleteKib 
} from "./kib.manager";
import { KibType } from "../types/kib.type";
import {errorHandler } from '../handlers/error.handler';
import {successHandler} from '../handlers/success.handler';

// Create
export const controlCreateKib = async (req: Request, res: Response) => {
    const kib = req.body as KibType;
    const createKibResult = await manageCreateKib(kib).catch(errorHandler(res, 400));
    if(createKibResult)
        successHandler(res, `Created new kib (kib id: ${kib._id}).`, createKibResult, 200);
};

// Read All
export const controlReadAllKibs = async (req: Request, res: Response) => {
    const kibs = await manageReadAllKibs().catch(errorHandler(res, 400));
    if(kibs)
        successHandler(res, `Read all kibs.`, kibs, 200);
};

// Read One
export const controlReadKib = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const kib = await manageReadKib(kibId).catch(errorHandler(res, 400));
    if(kib) 
        successHandler(res, `Read 1 kib (kib id: ${kibId}).`, kib, 200);
};

// Update
export const controlUpdateKib = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const updateData = req.body as Partial<KibType>;
    const updatedKib = await manageUpdateKib(kibId, updateData).catch(errorHandler(res, 400));
    if(updatedKib) 
        successHandler(res, `Updated 1 kib (kib id: ${kibId}).`, updatedKib, 200);
};

// Delete
export const controlDeleteKib = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const deleteKibResult = await manageDeleteKib(kibId).catch(errorHandler(res, 400));
    if(deleteKibResult)
        successHandler(res, `Deleted 1 kib (kib id: ${kibId}).`, deleteKibResult, 200);
}

