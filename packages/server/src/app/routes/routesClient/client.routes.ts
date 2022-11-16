import { Router } from 'express';
import CreateClientValidation from '../../validators/Client/CreateClientValidation';
import { createClientController } from '../../useCases/CreateClient'
import authorize from '../../middlewares/authorize';
import { findClientController } from '../../useCases/FindClient';

const clientRouter = Router();

clientRouter.route('/')
.post(
authorize.auth,
CreateClientValidation,
(request, response) => {
  return createClientController.handle(request, response);
})
.get(
authorize.auth,
(request, response) => {
  return findClientController.handle(request, response);
});

clientRouter.route('/:id')
.get(
authorize.auth,
(request, response) => {
  return findClientController.handle(request, response);
});

export default clientRouter;
