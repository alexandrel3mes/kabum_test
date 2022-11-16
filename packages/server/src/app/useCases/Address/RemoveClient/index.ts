import { TypeOrmAddressRepository } from "../../../repositories/implementations/TypeOrmAddressRepository";
import { RemoveAddressController } from "./RemoveAddressController";
import { RemoveAddressUseCase } from "./RemoveAddressUseCase";

const typeOrmAddressRepository = new TypeOrmAddressRepository()

const removeAddressUseCase = new RemoveAddressUseCase(typeOrmAddressRepository)
const removeAddressController = new RemoveAddressController(removeAddressUseCase)

export { removeAddressUseCase, removeAddressController }