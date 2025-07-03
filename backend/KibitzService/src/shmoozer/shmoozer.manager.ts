import { 
    repositoryCreateShmoozer, 
    repositoryReadAllShmoozers,
    repositoryReadShmoozer
} from "./shmoozer.repository";
import { ShmoozerType } from "../types/shmoozer.type";
import { Types } from 'mongoose';

// Create
export const manageCreateShmoozer = async (shmoozer: ShmoozerType): Promise<ShmoozerType> => {
    return await repositoryCreateShmoozer(shmoozer); 
};

//Read All
export const manageReadAllShmoozers = async (): Promise<ShmoozerType[]> => {
    return await repositoryReadAllShmoozers();
}; 
// Read One
export const manageReadShmoozer = async (shmoozerId: string | Types.ObjectId): 
    Promise<ShmoozerType> => {
    return await repositoryReadShmoozer(shmoozerId);
};