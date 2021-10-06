import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateEspecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

const createEspecificationController = new CreateEspecificationController();

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createEspecificationController.handle);

export { specificationsRoutes };
