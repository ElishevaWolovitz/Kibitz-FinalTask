import { Types } from 'mongoose';
import { 
    repositoryCreateKib, 
    repositoryReadAllKibs, 
    repositoryReadKibsByShmoozerId,
    repositoryReadKib, 
    repositoryUpdateKib, 
    repositoryDeleteKib 
} from "./kib.repository";
import { KibType } from "../types/kib.type";

// Create
export const manageCreateKib = async (kib: KibType): 
    Promise<KibType> => {
    return await repositoryCreateKib(kib); 
};

// Read All
export const manageReadAllKibs = async ():
    Promise<KibType[]> => {
    return await repositoryReadAllKibs();
}; 

// Read kibs by shmoozer ID
export const manageReadKibsByShmoozerId = async (shmoozerName: string | Types.ObjectId):
    Promise<KibType[]> => {
    return await repositoryReadKibsByShmoozerId(shmoozerName);
};

// Read One
export const manageReadKib = async (kibId: string | Types.ObjectId): 
    Promise<KibType> => {
    return await repositoryReadKib(kibId);
};

// Update   
export const manageUpdateKib = async ( kibId: string | Types.ObjectId, 
    updateData: Partial<KibType>): 
    Promise<KibType> => {
    return await repositoryUpdateKib(kibId, updateData);
};

// Delete
export const manageDeleteKib = async (kibId: string | Types.ObjectId): 
    Promise<KibType> => {
    return await repositoryDeleteKib(kibId);
};