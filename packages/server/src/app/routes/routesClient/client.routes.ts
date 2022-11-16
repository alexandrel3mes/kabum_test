import { Router } from 'express';
import { createClientController } from '../../useCases/CreateClient'

const clientRouter = Router();

clientRouter.post('/', (request, response) => {
  return createClientController.handle(request, response);
})

export default clientRouter;
