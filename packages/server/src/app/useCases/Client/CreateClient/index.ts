import { TypeOrmClientRepository } from "../../../repositories/implementations/TypeOrmClientRepository";
import { CreateClientController } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";

const typeOrmClientRepository = new TypeOrmClientRepository()

const createClientUseCase = new CreateClientUseCase(typeOrmClientRepository)
const createClientController = new CreateClientController(createClientUseCase)

export { createClientUseCase, createClientController }