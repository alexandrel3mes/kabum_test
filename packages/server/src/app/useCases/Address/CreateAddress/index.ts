import { TypeOrmClientRepository } from "../../../repositories/implementations/TypeOrmClientRepository"
import { TypeOrmAddressRepository } from "../../../repositories/implementations/TypeOrmAddressRepository"
import { CreateAddressController } from "./CreateAddressController"
import { CreateAddressUseCase } from "./CreateAddressUseCase"

const typeOrmAddressRepository = new TypeOrmAddressRepository()
const typeOrmClientRepository = new TypeOrmClientRepository()

const createAddressUseCase = new CreateAddressUseCase(typeOrmAddressRepository, typeOrmClientRepository)
const createAddressController = new CreateAddressController(createAddressUseCase)

export { createAddressUseCase, createAddressController }