import express from 'express';

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
  static async init(app: express.Application): Promise<void> {
    await dbLoader();
    console.log('database connected');
    expressLoader(app);
    console.log('express app initialized...');
  }
}

export default Loader;
