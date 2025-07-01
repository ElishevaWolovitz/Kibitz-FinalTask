import { ObjectId } from 'mongoose';

export type ShmoozerType = { 
    _id?: ObjectId | string;
    shmoozerName: string;
    displayName: string;
}