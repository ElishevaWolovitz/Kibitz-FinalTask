import express, { Router } from 'express';
import { controlCreateShmoozer, controlReadAllShmoozers, controlReadShmoozer } from './shmoozer.controller';
import { shmoozerBodySchema, shmoozerIdParamSchema } from './shmoozer.validator';
import { validateBody, validateParams } from '../joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/', 
    validateBody(shmoozerBodySchema), 
    controlCreateShmoozer
);
router.get(
    '/', 
    controlReadAllShmoozers
);

router.get(
    '/:id', 
    validateParams(shmoozerIdParamSchema), 
    controlReadShmoozer
);

export default router;
