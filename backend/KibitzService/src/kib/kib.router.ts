import express, { Router } from 'express';
import { 
    controlCreateKib, 
    controlReadAllKibs, 
    controlReadKibsByShmoozerId,
    controlReadKib, 
    controlUpdateKib, 
    controlDeleteKib 
} from './kib.controller';
import {
    kibBodySchema,
    kibUpdateBodySchema,
    kibIdParamSchema, 
    shmoozerIdParamSchema
  } from './kib.validator';
  import { validateBody, validateParams } from '../joi/joi.functions';


const router: Router = express.Router();

// Create one kib
router.post(
    '/', 
    validateBody(kibBodySchema), 
    controlCreateKib
);

// Read all kibs
router.get(
    '/', 
    controlReadAllKibs
);

// Read kibs that are create by a shmoozer
router.get(
    '/shmoozer/:id',
    validateParams(shmoozerIdParamSchema), 
    controlReadKibsByShmoozerId
);

// Update one kib
router.patch(
    '/:id', 
    validateParams(kibIdParamSchema), 
    validateBody(kibUpdateBodySchema), 
    controlUpdateKib
);

// Delete one kib
router.delete(
    '/:id', 
    validateParams(kibIdParamSchema), 
    controlDeleteKib
);

export default router;
