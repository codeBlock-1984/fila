import express, { Application } from 'express';

import expressLoader from './express.loader';
import dbLoader from './db.loader';

/* eslint-disable no-console */

/**
 * Loader class
 */
class Loader {

  /**
   * 
   * @param {object} app - Express application 
   * @returns {Promise} -
   */
  static async init(app: express.Application): Promise<Application> {
    await dbLoader();
    console.log('database connected');
    const loadedApp = await expressLoader(app);
    console.log('express app initialized...');
    return loadedApp;
  }
}

export default Loader;
