import { Router } from 'express';
import clientRouter from './routesClient/client.routes';
import UserRouter from './routesUser/user.routes';

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/client', clientRouter);

export default routes;
