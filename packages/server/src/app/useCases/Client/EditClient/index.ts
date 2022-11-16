import { TypeOrmClientRepository } from "../../../repositories/implementations/TypeOrmClientRepository";
import { EditClientController } from "./EditClientController";
import { EditClientUseCase } from "./EditClientUseCase";

const typeOrmClientRepository = new TypeOrmClientRepository()

const editClientUseCase = new EditClientUseCase(typeOrmClientRepository)
const editClientController = new EditClientController(editClientUseCase)

export { editClientUseCase, editClientController }