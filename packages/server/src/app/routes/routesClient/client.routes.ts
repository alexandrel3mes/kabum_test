import { Router } from 'express';
import CreateClientValidation from '../../validators/Client/CreateClientValidation';
import authorize from '../../middlewares/authorize';
import EditClientValidation from '../../validators/Client/EditClientValidation';
import { createClientController } from '../../useCases/Client/CreateClient';
import { findClientController } from '../../useCases/Client/FindClient';
import { editClientController } from '../../useCases/Client/EditClient';
import { removeClientController } from '../../useCases/Client/RemoveClient';

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
})
.patch(
  authorize.auth,
  EditClientValidation,
  (request, response) => {
    return editClientController.handle(request, response);
})
.delete(
  authorize.auth,
  (request, response) => {
    return removeClientController.handle(request, response);
  })


export default clientRouter;
