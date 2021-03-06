import { AppError } from './../../../../errors/AppError';
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import {inject,injectable} from 'tsyringe';

interface IRequest {
    name: string;
    description: string;
}

injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) { };

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadExists) {
            throw new AppError("Category already exists!",401);
        }

        await this.categoriesRepository.create({ name, description });

    }
}

export { CreateCategoryUseCase }