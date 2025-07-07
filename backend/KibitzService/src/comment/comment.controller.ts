import { Request, Response } from 'express';
import { 
    manageCreateComment, 
    manageReadAllComments, 
    manageReadChildrenCommentsOfCommentId,
    manageReadChildrenCommentsOfKibId,
    manageReadAllCommentsByShmoozerId,
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

// Read Children Comments of comment ID
export const controlReadChildrenCommentsOfCommentId = async (req: Request, res: Response) => {
    const { id: commentId } = req.params;
    const comments = await manageReadChildrenCommentsOfCommentId(commentId).catch(errorHandler(res, 400));
    if (comments) {
        successHandler(res, 'Comments retrieved successfully', comments, 200);
    }
}
// Read All Comments by Kib ID
export const controlReadChildrenCommentsOfKibId = async (req: Request, res: Response) => {
    const { id: kibId } = req.params;
    const comments = await manageReadChildrenCommentsOfKibId(kibId).catch(errorHandler(res, 400));
    if (comments) {
        successHandler(res, 'Comments retrieved successfully', comments, 200);
    }
};

// Read All Comments by Shmoozer ID
export const controlReadAllCommentsByShmoozerId = async (req: Request, res: Response) => {
    const { id: shmoozerId } = req.params;
    const comments = await manageReadAllCommentsByShmoozerId(shmoozerId).catch(errorHandler(res, 400));
    if (comments) {
        successHandler(res, 'Comments retrieved successfully', comments, 200);
    }
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



