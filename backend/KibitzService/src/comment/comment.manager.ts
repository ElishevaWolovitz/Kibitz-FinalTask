import { Types } from 'mongoose';
import { 
    repositoryCreateComment, 
    repositoryReadAllComments,  
    repositoryDeleteComment 
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

// Delete
export const manageDeleteComment = async (commentId: string | Types.ObjectId): 
    Promise<CommentType> => {
    return await repositoryDeleteComment(commentId);
};