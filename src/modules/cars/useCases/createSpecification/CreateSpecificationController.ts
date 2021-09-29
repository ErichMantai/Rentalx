import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateEspecificationUseCase } from './CreateEspecificationUseCase';

class CreateEspecificationController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createEspecificationUseCase = container.resolve(CreateEspecificationUseCase)

        await createEspecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}


export { CreateEspecificationController }