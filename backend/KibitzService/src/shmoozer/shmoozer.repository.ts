import { ShmoozerModel }from "../models/shmoozer.model";
import { ShmoozerType } from "../types/shmoozer.type";
import { Types } from 'mongoose';


//Create/Post
export const repositoryCreateShmoozer = async (shmoozer: ShmoozerType): Promise<ShmoozerType> => {
    return await new ShmoozerModel(shmoozer).save();
};
 
//Read All/Get All
export const repositoryReadAllShmoozers = async (): Promise<ShmoozerType[]>  => {
    return await ShmoozerModel.find();
}

// Read One
export const repositoryReadShmoozer = async (shmoozerId: string | Types.ObjectId): Promise<ShmoozerType> => {
    const readShmoozer = await ShmoozerModel.findById(shmoozerId); 
    if(!readShmoozer)
        throw new Error(`Shmoozer (${shmoozerId}) not able to be read.`);
    return readShmoozer;
};
