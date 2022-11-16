import { Router } from 'express';
import { loginController } from '../../useCases/User/Login';
import LoginValidation from '../../validators/User/LoginValidation';

const loginRouter = Router();

loginRouter.post('/', LoginValidation, (request, response) => {
  return loginController.handle(request, response);
})

export default loginRouter;
