import express, { Router } from 'express';
import { 
    controlCreateKib, 
    controlReadAllKibs, 
    controlReadKib, 
    controlUpdateKib, 
    controlDeleteKib 
} from './kib.controller';
import {
    kibBodySchema,
    kibUpdateBodySchema,
    kibIdParamSchema
  } from './kib.validator';
  import { validateBody, validateParams } from '../joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/', 
    validateBody(kibBodySchema), 
    controlCreateKib
);
router.get(
    '/', 
    controlReadAllKibs
);
router.get(
    '/:id', 
    validateParams(kibIdParamSchema), 
    controlReadKib
);
router.patch(
    '/:id', 
    validateParams(kibIdParamSchema), 
    validateBody(kibUpdateBodySchema), 
    controlUpdateKib
);
router.delete(
    '/:id', 
    validateParams(kibIdParamSchema), 
    controlDeleteKib
);

export default router;
