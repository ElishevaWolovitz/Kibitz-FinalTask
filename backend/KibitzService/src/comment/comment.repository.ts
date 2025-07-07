import { Types } from "mongoose";
import { CommentModel } from "../models/comment.model";
import { CommentType } from "../types/comment.type";

// Create
export const repositoryCreateComment = async (comment: CommentType): Promise<CommentType> => {
    const newComment = await new CommentModel(comment).save(); 
    if(!newComment)
        throw new Error(`Comment could not be created.`);
    return newComment;
};

// Read All
export const repositoryReadAllComments = async (): Promise<CommentType[]>  => {
    const allComments = await CommentModel.find().sort({ createdAt: -1 }); 
    if(!allComments)
        throw new Error(`Comments could not be read.`);
    return allComments;
};

// Read Children Comments of comment ID
export const repositoryReadChildrenCommentsOfCommentId = async (commentId: string | Types.ObjectId): Promise<CommentType[]> => {
    const childrenCommentsOfComment = await CommentModel.find({ parentCommentId: commentId }).sort({ createdAt: -1 });
    if(!childrenCommentsOfComment)
        throw new Error(`Children comments of comment (${commentId}) not able to be read.`);
    return childrenCommentsOfComment;
};
// Read Children Comments of Kib ID
export const repositoryReadChildrenCommentsOfKibId = async (kibId: string | Types.ObjectId): Promise<CommentType[]> => {
  const childenCommentsOfKib = await CommentModel.find({ kibId, parentCommentId: null }).sort({ createdAt: -1 });
    if(!childenCommentsOfKib)
        throw new Error(`Children comments of kib (${kibId}) not able to be read.`);
    return childenCommentsOfKib; 
};

// Read All Comments by Shmoozer ID
export const repositoryReadAllCommentsByShmoozerId = async (shmoozerId: string | Types.ObjectId): Promise<CommentType[]> => {
    const shmoozerComments = await CommentModel.find({ shmoozerId });
    if(!shmoozerComments)
        throw new Error(`Comments posted by shmoozer - (${shmoozerId}) not able to be read.`);
    return shmoozerComments;
};

// Read One
export const repositoryReadComment = async (commentId: string | Types.ObjectId): Promise<CommentType> => {
    const readComment = await CommentModel.findById(commentId); 
    if(!readComment)
        throw new Error(`Comment (${commentId}) not able to be read.`);
    return readComment;
};

// Delete
export const repositoryDeleteComment = async (commentId: string | Types.ObjectId): Promise<CommentType> => {
    const deletedComment = await CommentModel.findByIdAndDelete(commentId); 
    if(!deletedComment)
        throw new Error(`Comment (${commentId}) not able to be deleted.`);
    return deletedComment; 
};

// Recursive delete to handle nested comments
export const repositoryDeleteCommentsByParentId = async (parentId: string | Types.ObjectId): Promise<CommentType> => {
    // Get all child comments first
    const childComments = await CommentModel.find({ parentCommentId: parentId });
    // Recursively delete all nested comments
    for (const child of childComments) {
    const deletedComment = await repositoryDeleteCommentsByParentId(child._id);
    }
    // Delete all direct child comments
    return await repositoryDeleteComment(parentId);
};