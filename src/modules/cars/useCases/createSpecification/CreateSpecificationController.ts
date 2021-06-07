import { Request, Response } from 'express';
import { CreateEspecificationUseCase } from './CreateEspecificationUseCase';

class CreateEspecificationController {

    constructor(private createSpecificationUseCase: CreateEspecificationUseCase) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;


        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}


export { CreateEspecificationController }