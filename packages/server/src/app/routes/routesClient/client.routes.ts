import { Router } from 'express';
import CreateClientValidation from '../../validators/Client/CreateClientValidation';
import { createClientController } from '../../useCases/CreateClient'

const clientRouter = Router();

clientRouter.post('/', CreateClientValidation, (request, response) => {
  return createClientController.handle(request, response);
})

export default clientRouter;
