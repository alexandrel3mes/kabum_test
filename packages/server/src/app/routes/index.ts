import { Router } from 'express';
import loginRouter from './login/login.routes';
import register from './register/register.routes';
import addressRouter from './routesAddress/address.routes';
import clientRouter from './routesClient/client.routes';
import UserRouter from './routesUser/user.routes';

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/client', clientRouter);
routes.use('/register', register);
routes.use('/login', loginRouter);
routes.use('/address', addressRouter);

export default routes;
