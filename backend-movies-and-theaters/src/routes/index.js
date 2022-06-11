import { Router } from 'express';

import createUserRoutes from './createUser.routes';

const routes = Router();

routes.use(createUserRoutes);


export default routes;
