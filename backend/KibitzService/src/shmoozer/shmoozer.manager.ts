import { 
    repositoryCreateShmoozer, 
    repositoryReadShmoozer,
    repositoryFindShmoozerByName
} from "./shmoozer.repository";
import { ShmoozerType } from "../types/shmoozer.type";
import { Types } from 'mongoose';

// Create
export const manageCreateShmoozer = async (shmoozer: ShmoozerType): 
    Promise<ShmoozerType> => {
        return await repositoryCreateShmoozer(shmoozer); 
};

// Read One
export const manageReadShmoozer = async (shmoozerId: string | Types.ObjectId): 
    Promise<ShmoozerType> => {
        return await repositoryReadShmoozer(shmoozerId);
};

// Find Shmoozer by Name for login
export const manageFindShmoozerByName = async (shmoozerName: string): 
    Promise<ShmoozerType | null> => {
        return await repositoryFindShmoozerByName(shmoozerName);
};