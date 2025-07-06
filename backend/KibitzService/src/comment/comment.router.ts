import express, { Router } from 'express';
import { 
    controlCreateComment, 
    controlReadAllComments, 
    controlReadComment, 
    controlReadAllCommentsByKibId,
    controlReadAllCommentsByShmoozerId,
    controlDeleteComment 
} from './comment.controller';
import {
    commentBodySchema,
    commentIdParamSchema
  } from './comment.validator';
import { validateBody, validateParams } from '../joi/joi.functions';
import { kibIdParamSchema } from '../kib/kib.validator';
import { shmoozerIdParamSchema } from '../shmoozer/shmoozer.validator';


const router: Router = express.Router();

// Create Comment
router.post(
    '/', 
    validateBody(commentBodySchema), 
    controlCreateComment
);

//Read All Comments
router.get(
    '/', 
    controlReadAllComments
);

// Read All Comments by kib ID
router.get(
  '/kib/:kibId',
  validateParams(kibIdParamSchema),
  controlReadAllCommentsByKibId
);

// Read All Comments by shmoozer ID
router.get(
  '/shmoozer/:id',
  validateParams(shmoozerIdParamSchema),
  controlReadAllCommentsByShmoozerId
);

// Read One Comment
router.get(
    '/:id', 
    validateParams(commentIdParamSchema), 
    controlReadComment
);

// Delete Comment and all its child comments
router.delete(
    '/:id', 
    validateParams(commentIdParamSchema), 
    controlDeleteComment
);

export default router;
