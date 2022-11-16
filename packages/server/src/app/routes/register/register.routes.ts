import { Router } from 'express';
import CreateUserValidation from '../../validators/User/CreateUserValidation';
import { createUserController } from '../../useCases/CreateUser'

const register = Router();

register.post('/', CreateUserValidation, (request, response) => {
  return createUserController.handle(request, response);
})

export default register;
