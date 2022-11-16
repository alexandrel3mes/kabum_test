import { TypeOrmAddressRepository } from "../../../repositories/implementations/TypeOrmAddressRepository"
import { FindAddressController } from "./FindAddressController"
import { FindAddressUseCase } from "./FindAddressUseCase"

const typeOrmAddressRepository = new TypeOrmAddressRepository()

const findAddressUseCase = new FindAddressUseCase(typeOrmAddressRepository)
const findAddressController = new FindAddressController(findAddressUseCase)

export { findAddressUseCase, findAddressController }