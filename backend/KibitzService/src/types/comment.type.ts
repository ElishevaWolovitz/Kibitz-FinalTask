import { Types } from 'mongoose';

export type CommentType = {
    _id?: Types.ObjectId;
    commentName: string;
    shmoozerId: Types.ObjectId;
    kibId: Types.ObjectId;
    parentCommentId?: Types.ObjectId;
    text: string;
    media?: string;
    createdAt?: Date;
}