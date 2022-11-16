import { TypeOrmLoginRepository } from "../../repositories/implementations/TypeOrmLoginRepository"
import { LoginController } from "./LoginController"
import { LoginUseCase } from "./LoginUseCase"

const typeOrmLoginRepository = new TypeOrmLoginRepository()

const loginUseCase = new LoginUseCase(typeOrmLoginRepository)
const loginController = new LoginController(loginUseCase)

export { loginUseCase, loginController }