import { Types } from 'mongoose';

export type KibType = {
    _id?: Types.ObjectId;
    kibName: string;
    shmoozerId: Types.ObjectId;
    text: string;
    media?: string;
    likes?: number;
    createdAt?: Date;
}