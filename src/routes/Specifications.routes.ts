import { Router } from 'express';
import { createEspecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createEspecificationController.handle(request, response);
});

export { specificationsRoutes };
