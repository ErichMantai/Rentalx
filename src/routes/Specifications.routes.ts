import { Router } from 'express';
import { CreateEspecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

const createEspecificationController = new CreateEspecificationController();

specificationsRoutes.post("/", createEspecificationController.handle);

export { specificationsRoutes };
