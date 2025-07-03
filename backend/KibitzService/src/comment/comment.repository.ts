import { Types } from "mongoose";
import { CommentModel } from "../models/comment.model";
import { CommentType } from "../types/comment.type";

// Create
export const repositoryCreateComment = async (comment: CommentType): Promise<CommentType> => {
    return await new CommentModel(comment).save(); 
};

// Read All
export const repositoryReadAllComments = async (): Promise<CommentType[]>  => {
    return await CommentModel.find(); 
};

// Delete
export const repositoryDeleteComment = async (commentId: string | Types.ObjectId): Promise<CommentType> => {
    const deletedComment = await CommentModel.findByIdAndDelete(commentId); 
    if(!deletedComment)
        throw new Error(`Comment (${commentId}) not able to be deleted.`);
    return deletedComment; 
};