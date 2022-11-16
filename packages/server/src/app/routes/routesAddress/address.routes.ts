import { Router } from 'express';
import authorize from '../../middlewares/authorize';
import { findAddressController } from '../../useCases/Address/FindAddress';
import { editAddressController } from '../../useCases/Address/EditAddress';
import { removeAddressController } from '../../useCases/Address/RemoveClient';
import EditAddressValidation from '../../validators/Address/EditAddressValidation';
import { createAddressController } from '../../useCases/Address/CreateAddress';
import CreateAddressValidation from '../../validators/Address/CreateAddressValidation';

const addressRouter = Router();

addressRouter.route('/')
.get(
authorize.auth,
(request, response) => {
  return findAddressController.handle(request, response);
});

addressRouter.route('/:id')
.get(
authorize.auth,
(request, response) => {
  return findAddressController.handle(request, response);
})
.patch(
  authorize.auth,
  EditAddressValidation,
  (request, response) => {
    return editAddressController.handle(request, response);
})
.post(
  authorize.auth,
  CreateAddressValidation,
  (request, response) => {
    return createAddressController.handle(request, response);
})
.delete(
  authorize.auth,
  (request, response) => {
    return removeAddressController.handle(request, response);
  })


export default addressRouter;
