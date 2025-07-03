import { Types } from "mongoose";
import { KibModel } from "../models/kib.model";
import { KibType } from "../types/kib.type";

// Create
export const repositoryCreateKib = async (kib: KibType): Promise<KibType> => {
    return await new KibModel(kib).save(); 
};

// Read All
export const repositoryReadAllKibs = async (): Promise<KibType[]>  => {
    return await KibModel.find(); 
};

// Read One
export const repositoryReadKib = async (kibId: string | Types.ObjectId): Promise<KibType> => {
    const readKib = await KibModel.findById(kibId); 
    if(!readKib)
        throw new Error(`Kib (${kibId}) not able to be read.`);
    return readKib;
};

// Update   
export const repositoryUpdateKib = async ( kibId: string | Types.ObjectId, updateData: Partial<KibType>): Promise<KibType> => {
    const updatedKib = await KibModel.findByIdAndUpdate(kibId, updateData, { new: true });
    if(!updatedKib)
        throw new Error(`Kib (${kibId}) not able to be updated.`);
    return updatedKib;
};

// Delete
export const repositoryDeleteKib = async (kibId: string | Types.ObjectId): Promise<KibType> => {
    const deletedKib = await KibModel.findByIdAndDelete(kibId); 
    if(!deletedKib)
        throw new Error(`Kib (${kibId}) not able to be deleted.`);
    return deletedKib; 
};