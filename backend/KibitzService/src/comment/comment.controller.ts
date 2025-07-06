import { Request, Response } from 'express';
import { 
    manageCreateComment, 
    manageReadAllComments, 
    manageReadAllCommentsByKibId,
    manageReadAllCommentsByShmoozerId,
    manageReadComment,
    manageDeleteComment 
} from "./comment.manager";
import { CommentType } from "../types/comment.type";
import {errorHandler } from '../handlers/error.handler';
import {successHandler} from '../handlers/success.handler';
import { Types } from "mongoose";

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

// Read All Comments by Kib ID
export const controlReadAllCommentsByKibId = async (req: Request, res: Response) => {
    const { kibId: kibIdString } = req.params;
    const kibId = new Types.ObjectId(kibIdString);
    const comments = await manageReadAllCommentsByKibId(kibId).catch(errorHandler(res, 400));
    if (comments) {
        successHandler(res, 'Comments retrieved successfully', comments, 200);
    }
};

// Read All Comments by Shmoozer ID
export const controlReadAllCommentsByShmoozerId = async (req: Request, res: Response) => {
    const { shmoozerId: shmoozerIdString } = req.params;
    const shmoozerId = new Types.ObjectId(shmoozerIdString);
    const comments = await manageReadAllCommentsByShmoozerId(shmoozerId).catch(errorHandler(res, 400));
    if (comments) {
        successHandler(res, 'Comments retrieved successfully', comments, 200);
        console.log(`Comments for Shmoozer ID ${shmoozerId}:`, comments);
    }
};

// Read One
export const controlReadComment = async (req: Request, res: Response) => {
    const { id: commentIdString } = req.params;
    const commentId = new Types.ObjectId(commentIdString);
    const comment = await manageReadComment(commentId).catch(errorHandler(res, 400));
    if(comment) 
        successHandler(res, `Read 1 comment (comment id: ${commentId}).`, comment, 200);
};

// Delete
export const controlDeleteComment = async (req: Request, res: Response) => {
    const { id: commentIdString } = req.params;
    const commentId = new Types.ObjectId(commentIdString);
    const deleteCommentResult = await manageDeleteComment(commentId).catch(errorHandler(res, 400));
    if(deleteCommentResult)
        successHandler(res, `Deleted 1 comment (comment id: ${commentId}).`, 
                        deleteCommentResult, 200);
}



