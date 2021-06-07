import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateEspecificationUseCase } from "./CreateEspecificationUseCase";
import { CreateEspecificationController } from "./CreateSpecificationController";


const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateEspecificationUseCase(specificationsRepository);
const createEspecificationController = new CreateEspecificationController(createSpecificationUseCase);


export { createEspecificationController }