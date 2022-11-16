import { Router } from 'express';
import { createUserController } from '../../useCases/User/CreateUser';
import CreateUserValidation from '../../validators/User/CreateUserValidation';

const register = Router();

register.post('/', CreateUserValidation, (request, response) => {
  return createUserController.handle(request, response);
})

export default register;
