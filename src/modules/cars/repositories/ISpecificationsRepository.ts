import { Specification } from "../entities/Specification";


interface ICreateEspecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateEspecificationDTO): void;
    findByName(name: string): Specification;
}

export { ICreateEspecificationDTO, ISpecificationsRepository }
