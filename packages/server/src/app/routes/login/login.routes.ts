import { Router } from 'express';
import LoginValidation from '../../validators/User/LoginValidation';
import { loginController } from '../../useCases/Login'

const loginRouter = Router();

loginRouter.post('/', LoginValidation, (request, response) => {
  return loginController.handle(request, response);
})

export default loginRouter;
