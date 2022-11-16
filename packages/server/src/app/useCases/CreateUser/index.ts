import { TypeOrmUserRepository } from "../../repositories/implementations/TypeOrmUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const typeOrmUserRepository = new TypeOrmUserRepository()

const createUserUseCase = new CreateUserUseCase(typeOrmUserRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }