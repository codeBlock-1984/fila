import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

/**
 * Loads app middleware
 * @param {object} app - Express application
 * @returns {object} - Express application
 */
const loader = (app: express.Application): express.Application => {
  app.use(cors);
  app.use(express.json());
  app.use(morgan('tiny'));
  app.use(express.urlencoded({ extended: true }));

  return app;
};

export default loader;
