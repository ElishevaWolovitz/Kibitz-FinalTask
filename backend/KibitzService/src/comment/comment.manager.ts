import { Types } from 'mongoose';
import { 
    repositoryCreateComment, 
    repositoryReadAllComments,  
    repositoryReadComment,
    repositoryReadAllCommentsByKibId,
    repositoryReadAllCommentsByShmoozerId,
    repositoryDeleteCommentsByParentId,
    repositoryDeleteComment 
} from "./comment.repository";
import { CommentType } from "../types/comment.type";
import { filter, map } from 'lodash/fp';

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

// Helper function to build nested comment tree
const buildCommentTree = (comments: CommentType[], parentId: string | null = null): CommentType[] => {
  return map((comment: CommentType) => ({
      ...comment,
      replies: buildCommentTree(comments, String(comment._id))
    }),
    filter((comment: CommentType) =>
      (comment.parentCommentId ? String(comment.parentCommentId) : null) === parentId,
      comments
    )
  );
};

export const manageReadAllCommentsByKibId = async (kibId: Types.ObjectId): Promise<CommentType[]> => {
  const comments = await repositoryReadAllCommentsByKibId(kibId);
  const commentsTree = buildCommentTree(comments);
  console.log(`Comments tree for Kib ID ${kibId}:`, commentsTree);
  return commentsTree;
};

export const manageReadAllCommentsByShmoozerId = async (shmoozerId: Types.ObjectId): Promise<CommentType[]> => {
  const shmoozerComments = await repositoryReadAllCommentsByShmoozerId(shmoozerId);
  console.log(shmoozerComments)
  return shmoozerComments;
};

// Read One
export const manageReadComment = async (commentId: Types.ObjectId): 
    Promise<CommentType> => {
    return await repositoryReadComment(commentId);
};

// Delete
export const manageDeleteComment = async (commentId: Types.ObjectId): 
    Promise<CommentType> => {
        return await repositoryDeleteCommentsByParentId(commentId);
};
