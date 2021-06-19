import { Response, Request } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';


class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;
            await this.createCategoryUseCase.execute({ name, description });

            return response.status(201).send();
        } catch (error) {
            return response.status(404).json({ "error": "Category already exists!" })
        }

    }
}

export { CreateCategoryController }