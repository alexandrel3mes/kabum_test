import { Router } from 'express';
import CreateClientValidation from '../../validators/Client/CreateClientValidation';
import { createClientController } from '../../useCases/CreateClient'
import authorize from '../../middlewares/authorize';

const clientRouter = Router();

clientRouter.post('/', authorize.auth, CreateClientValidation, (request, response) => {
  return createClientController.handle(request, response);
})

export default clientRouter;
