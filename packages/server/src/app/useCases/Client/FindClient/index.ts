import { TypeOrmClientRepository } from "../../../repositories/implementations/TypeOrmClientRepository"
import { FindClientController } from "./FindClientController"
import { FindClientUseCase } from "./FindClientUseCase"

const typeOrmClientRepository = new TypeOrmClientRepository()

const findClientUseCase = new FindClientUseCase(typeOrmClientRepository)
const findClientController = new FindClientController(findClientUseCase)

export { findClientUseCase, findClientController }