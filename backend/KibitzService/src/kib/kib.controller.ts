import { Request, Response } from 'express';
import { 
    manageCreateKib, 
    manageReadAllKibs, 
    manageReadKibsByShmoozerName,
    manageReadKib, 
    manageUpdateKib, 
    manageDeleteKib 
} from "./kib.manager";
import { KibType } from "../types/kib.type";
import {errorHandler } from '../handlers/error.handler';
import {successHandler} from '../handlers/success.handler';

// Create one kib
export const controlCreateKib = async (req: Request, res: Response) => {
    const kib = req.body as KibType;
    const createKibResult = await manageCreateKib(kib).catch(errorHandler(res, 400));
    if(createKibResult)
        successHandler(res, `Created new kib (kib id: ${kib._id}).`, createKibResult, 200);
};

// Read all kibs in db
export const controlReadAllKibs = async (req: Request, res: Response) => {
    const kibs = await manageReadAllKibs().catch(errorHandler(res, 400));
    if(kibs)
        successHandler(res, `Read all kibs.`, kibs, 200);
};

// Read all kibs by specific shmoozer given shmoozeName
export const controlReadKibsByShmoozerName = async (req: Request, res: Response) => {
    const { shmoozerId } = req.params;
    const shmoozerName = req.headers["x-shmoozerName"] as string;
    if(shmoozerName) {
        const kibsResult = await manageReadKibsByShmoozerName(shmoozerName).catch(errorHandler(res, 400));
        if(kibsResult)
            successHandler(res, `Read kibs for shmoozer ${shmoozerName}
            (${shmoozerId}).`, kibsResult, 200);
    }
    else 
        errorHandler(res, 400)(new Error("cannot get kibs for other shmoozers"));
};

// Read one kib given kib id
export const controlReadKib = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const kib = await manageReadKib(kibId).catch(errorHandler(res, 400));
    if(kib) 
        successHandler(res, `Read 1 kib (kib id: ${kibId}).`, kib, 200);
};

// Update a specific shmoozers kib given shmoozerName
export const controlUpdateKib = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const shmoozerName = req.headers["x-shmoozerName"] as string;
    if(shmoozerName) {
        const updateData = req.body as Partial<KibType>;
        const updatedKib = await manageUpdateKib(kibId, updateData, shmoozerName).catch(errorHandler(res, 400));
        if(updatedKib) 
            successHandler(res, `Shmoozer ${shmoozerName} updated 1 kib (kib id: ${kibId}).`, updatedKib, 200);
    }
    else 
        errorHandler(res, 400)(new Error("cannot edit, no shmoozer logged in"));
};

// Delete a specific shmoozers kib given shmoozerName
export const controlDeleteKib = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const shmoozerName = req.headers["x-shmoozerName"] as string;
    if(shmoozerName) {
        const deleteKibResult = await manageDeleteKib(kibId, shmoozerName).catch(errorHandler(res, 400));
        if(deleteKibResult)
            successHandler(res, `Shmoozer ${shmoozerName} deleted 1 kib (kib id: ${kibId}).`, deleteKibResult, 200);
    }
    else 
        errorHandler(res, 400)(new Error("cannot delete, no shmoozer logged in"));
}

