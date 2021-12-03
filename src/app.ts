import express from 'express';
import 'reflect-metadata';

import loaders from './loaders';

/**
 * Creates and initializes the express app
 * @returns {Promise} - Express app
 */
const appLoader = async (): Promise<express.Application> => {
  const app = express();
  await loaders.init(app);
  return app;
};


export default appLoader;

