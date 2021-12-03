import { Application, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from '../routers';
import { errorHandler } from '../middleware/errorHandler';
import { responseHandler } from '../middleware/responseHandler';
import { notFoundHandler } from '../middleware/notFoundHandler';
import { requestIdentityHandler } from '../middleware/requestIdentityHandler';

/**
 * Loads app middleware
 * @param {object} app - Express application
 * @returns {object} - Express application
 */
const loader = async (app: Application): Promise<Application> => {
  app.use(cors());
  app.use(json());
  app.use(morgan('tiny'));
  app.use(urlencoded({ extended: true }));
  app.use(requestIdentityHandler);
  app.use('/api/v1', router);
  app.use(errorHandler);
  app.use(responseHandler);
  app.all('*', notFoundHandler);

  return app;
};

export default loader;
