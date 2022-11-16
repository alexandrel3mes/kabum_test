import { TypeOrmClientRepository } from "../../../repositories/implementations/TypeOrmClientRepository";
import { RemoveClientController } from "./RemoveClientController";
import { RemoveClientUseCase } from "./RemoveClientUseCase";

const typeOrmClientRepository = new TypeOrmClientRepository()

const removeClientUseCase = new RemoveClientUseCase(typeOrmClientRepository)
const removeClientController = new RemoveClientController(removeClientUseCase)

export { removeClientUseCase, removeClientController }