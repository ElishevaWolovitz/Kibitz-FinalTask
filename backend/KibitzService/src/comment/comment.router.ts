import express, { Router } from 'express';
import { 
    controlCreateComment, 
    controlReadAllComments,  
    controlDeleteComment 
} from './comment.controller';
import {
    commentBodySchema,
    commentIdParamSchema
  } from './comment.validator';
  import { validateBody, validateParams } from '../joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/', 
    validateBody(commentBodySchema), 
    controlCreateComment
);
router.get(
    '/', 
    controlReadAllComments
);
router.delete(
    '/:id', 
    validateParams(commentIdParamSchema), 
    controlDeleteComment
);

export default router;
