import express, { Router } from 'express';
import { 
    controlCreateComment, 
    controlReadAllComments, 
    controlReadComment, 
    controlReadChildrenCommentsOfCommentId,
    controlReadChildrenCommentsOfKibId,
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
// Read Children Comments of comment ID
router.get(
    '/children/:id',
    validateParams(commentIdParamSchema),
    controlReadChildrenCommentsOfCommentId
)
// Read Children Comments of kib ID
router.get(
  '/kib/:id',
  validateParams(kibIdParamSchema),
  controlReadChildrenCommentsOfKibId
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
