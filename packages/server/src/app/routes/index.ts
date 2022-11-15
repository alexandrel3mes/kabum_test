import { Router } from 'express';
import UserRouter from './routesUser/user.routes';

const routes = Router();

routes.use('/user', UserRouter);

export default routes;
