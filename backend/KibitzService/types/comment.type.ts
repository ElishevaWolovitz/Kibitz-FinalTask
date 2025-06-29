import { Types } from 'mongoose';

export type CommentType = {
    _id?: Types.ObjectId;
    commentName: string;
    shmoozerId: Types.ObjectId;
    text: string;
    createdAt?: Date;
}