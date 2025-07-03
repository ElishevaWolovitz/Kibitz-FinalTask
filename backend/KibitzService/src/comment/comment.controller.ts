import { Request, Response } from 'express';
import { 
    manageCreateComment, 
    manageReadAllComments, 
    manageReadComment,
    manageDeleteComment 
} from "./comment.manager";
import { CommentType } from "../types/comment.type";
import {errorHandler } from '../handlers/error.handler';
import {successHandler} from '../handlers/success.handler';

// Create
export const controlCreateComment = async (req: Request, res: Response) => {
    const comment = req.body as CommentType;
    const createCommentResult = await manageCreateComment(comment).catch(errorHandler(res, 400));
    if(createCommentResult)
        successHandler(res, `Created new comment (comment id: ${comment._id}).`, 
                        createCommentResult, 200);
};

// Read All
export const controlReadAllComments = async (req: Request, res: Response) => {
    const comments = await manageReadAllComments().catch(errorHandler(res, 400));
    if(comments)
        successHandler(res, `Read all comments.`, comments, 200);
};

// Read One
export const controlReadComment = async (req: Request, res: Response) => {
    const { id: commentId } = req.params;
    const comment = await manageReadComment(commentId).catch(errorHandler(res, 400));
    if(comment) 
        successHandler(res, `Read 1 comment (comment id: ${commentId}).`, comment, 200);
};

// Delete
export const controlDeleteComment = async (req: Request, res: Response) => {
    const { id: commentId } = req.params;
    const deleteCommentResult = await manageDeleteComment(commentId).catch(errorHandler(res, 400));
    if(deleteCommentResult)
        successHandler(res, `Deleted 1 comment (comment id: ${commentId}).`, 
                        deleteCommentResult, 200);
}

