import { Router } from 'express';
import register from './register/register.routes';
import clientRouter from './routesClient/client.routes';
import UserRouter from './routesUser/user.routes';

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/client', clientRouter);
routes.use('/register', register);

export default routes;
