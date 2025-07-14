import { Types } from "mongoose";
import { KibModel } from "../models/kib.model";
import { KibType } from "../types/kib.type";

// Create
export const repositoryCreateKib = async (kib: KibType): Promise<KibType> => {
    return await new KibModel(kib).save(); 
};

// Read All
export const repositoryReadAllKibs = async (): Promise<KibType[]>  => {
    return await KibModel.find().sort({ createdAt: -1 }); 
};

// Read One
export const repositoryReadKib = async (kibId: string | Types.ObjectId): Promise<KibType> => {
    const readKib = await KibModel.findById(kibId); 
    if(!readKib)
        throw new Error(`Kib (${kibId}) not able to be read.`);
    return readKib;
};

// Read kibs by shmoozer ID 
export const repositoryReadKibsByShmoozerId = async (shmoozerId: string | Types.ObjectId): 
    Promise<KibType[]> => {
        const kibs = await KibModel.find({shmoozerId}).sort({ createdAt: -1 });
        return kibs;
};

// Update   
export const repositoryUpdateKib = async ( kibId: string | Types.ObjectId, 
    updateData: Partial<KibType>,
    shmoozerId: string
    ): Promise<KibType> => {
        const kib = await KibModel.findById(kibId);
        const kibShmoozerId = kib ? kib.shmoozerId.toString() : null;
        if(!shmoozerId || !kibShmoozerId || !(shmoozerId === kibShmoozerId)) {
            throw new Error(`Shmoozer ${shmoozerId} is not authorized to update kib (${kibId}).`);
        }
        const updatedKib = await KibModel.findByIdAndUpdate(kibId, updateData, { new: true });
        if(!updatedKib)
            throw new Error(`Kib (${kibId}) not able to be updated.`);
        return updatedKib;
};

// Delete
export const repositoryDeleteKib = async (kibId: string | Types.ObjectId, shmoozerId: string
    ): Promise<KibType> => {
        const kib = await KibModel.findById(kibId);
        const kibShmoozerId = kib ? kib.shmoozerId.toString() : null;
        if(!shmoozerId || !kibShmoozerId || !(shmoozerId === kibShmoozerId)) {
            throw new Error(`Shmoozer ${shmoozerId} is not authorized to update kib (${kibId}).`);
        }
        const deletedKib = await KibModel.findByIdAndDelete(kibId); 
        if(!deletedKib)
            throw new Error(`Kib (${kibId}) not able to be deleted.`);
        return deletedKib; 
};