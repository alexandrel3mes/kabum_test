import { TypeOrmAddressRepository } from "../../../repositories/implementations/TypeOrmAddressRepository"
import { EditAddressController } from "./EditAddressController"
import { EditAddressUseCase } from "./EditAddressUseCase"

const typeOrmAddressRepository = new TypeOrmAddressRepository()

const editAddressUseCase = new EditAddressUseCase(typeOrmAddressRepository)
const editAddressController = new EditAddressController(editAddressUseCase)

export { editAddressUseCase, editAddressController }