import { Types } from 'mongoose';
import { 
    repositoryCreateComment, 
    repositoryReadAllComments,  
    repositoryReadComment,
    repositoryReadChildrenCommentsOfCommentId,
    repositoryReadChildrenCommentsOfKibId,
    repositoryReadAllCommentsByShmoozerId,
    repositoryDeleteCommentsByParentId
} from "./comment.repository";
import { CommentType } from "../types/comment.type";

// Create
export const manageCreateComment = async (comment: CommentType): 
    Promise<CommentType> => {
    return await repositoryCreateComment(comment); 
};

// Read All
export const manageReadAllComments = async ():
    Promise<CommentType[]> => {
    return await repositoryReadAllComments();
}; 

// Read Children Comments of comment ID
export const manageReadChildrenCommentsOfCommentId = async (commentId: string | Types.ObjectId): Promise<CommentType[]> => {
  return await repositoryReadChildrenCommentsOfCommentId(commentId);
}

// Read Children Comments of kib ID 
export const manageReadChildrenCommentsOfKibId = async (kibId: string | Types.ObjectId): Promise<CommentType[]> => {
  return await repositoryReadChildrenCommentsOfKibId(kibId);
};

// Read All Comments by Shmoozer ID
export const manageReadAllCommentsByShmoozerId = async (shmoozerId: string | Types.ObjectId): Promise<CommentType[]> => {
  return await repositoryReadAllCommentsByShmoozerId(shmoozerId);
};

// Read One
export const manageReadComment = async (commentId: string | Types.ObjectId): 
    Promise<CommentType> => {
    return await repositoryReadComment(commentId);
};

// Delete
export const manageDeleteComment = async (commentId: string | Types.ObjectId): 
    Promise<CommentType> => {
        return await repositoryDeleteCommentsByParentId(commentId);
};
