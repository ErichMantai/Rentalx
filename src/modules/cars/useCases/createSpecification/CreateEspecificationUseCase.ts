import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateEspecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) {

    }
    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(
            name
        );

        if (specificationAlreadyExists) {
            throw new AppError("Specification already exists!",401);
        };

       await this.specificationsRepository.create({
            name,
            description
        });
    };

}

export { CreateEspecificationUseCase }