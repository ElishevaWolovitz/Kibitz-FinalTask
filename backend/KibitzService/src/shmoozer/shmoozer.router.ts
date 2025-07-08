import express, { Router } from 'express';
import { controlCreateShmoozer, controlReadAllShmoozers, controlReadShmoozer, controlFindShmoozeByName } from './shmoozer.controller';
import { shmoozerBodySchema, shmoozerIdParamSchema, shmoozerNameParamSchema} from './shmoozer.validator';
import { validateBody, validateParams } from '../joi/joi.functions';


const router: Router = express.Router();

// Create/Post endpoint
router.post(
    '/', 
    validateBody(shmoozerBodySchema), 
    controlCreateShmoozer
);

// Read All endpoint
router.get(
    '/', 
    controlReadAllShmoozers
);

// Read One endpoint
router.get(
    '/:id', 
    validateParams(shmoozerIdParamSchema), 
    controlReadShmoozer
);

// Login endpoint
router.post(
    '/login/:shmoozerName',
    validateBody(shmoozerNameParamSchema),
    controlFindShmoozeByName
);
export default router;
