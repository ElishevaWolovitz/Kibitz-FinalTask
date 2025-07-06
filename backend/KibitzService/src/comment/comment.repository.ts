import { Types } from "mongoose";
import { CommentModel } from "../models/comment.model";
import { CommentType } from "../types/comment.type";

// Create
export const repositoryCreateComment = async (comment: CommentType): Promise<CommentType> => {
    return await new CommentModel(comment).save(); 
};

// Read All
export const repositoryReadAllComments = async (): Promise<CommentType[]>  => {
    return await CommentModel.find().sort({ createdAt: -1 }); 
};

// Read All Comments by Kib ID
export const repositoryReadAllCommentsByKibId = async (kibId: Types.ObjectId): Promise<CommentType[]> => {
  return await CommentModel.find({ kibId }).sort({ createdAt: -1 });
};

// Read All Comments by Shmoozer ID
export const repositoryReadAllCommentsByShmoozerId = async (shmoozerId: Types.ObjectId): Promise<CommentType[]> => {
    const shmoozerComments = await CommentModel.find({ shmoozerId });
    console.log(shmoozerComments);
    return shmoozerComments;
};

// Read One
export const repositoryReadComment = async (commentId: Types.ObjectId): Promise<CommentType> => {
    const readComment = await CommentModel.findById(commentId); 
    if(!readComment)
        throw new Error(`Comment (${commentId}) not able to be read.`);
    return readComment;
};

// Delete
export const repositoryDeleteComment = async (commentId: Types.ObjectId): Promise<CommentType> => {
    const deletedComment = await CommentModel.findByIdAndDelete(commentId); 
    if(!deletedComment)
        throw new Error(`Comment (${commentId}) not able to be deleted.`);
    return deletedComment; 
};

// Recursive delete to handle nested comments
export const repositoryDeleteCommentsByParentId = async (parentId: Types.ObjectId): Promise<CommentType> => {
    // Get all child comments first
    const childComments = await CommentModel.find({ parentCommentId: parentId });
    // Recursively delete all nested comments
    for (const child of childComments) {
    const deletedComment = await repositoryDeleteCommentsByParentId(child._id);
    }
    // Delete all direct child comments
    return await repositoryDeleteComment(parentId);
};