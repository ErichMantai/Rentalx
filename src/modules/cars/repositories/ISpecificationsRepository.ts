import { Specification } from "../entities/Specification";


interface ICreateEspecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateEspecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ICreateEspecificationDTO, ISpecificationsRepository }
