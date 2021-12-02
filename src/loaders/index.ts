import express from 'express';

import expressLoader from './express.loader';

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
    expressLoader(app);
    console.log('express app initialized...');
  }
}

export default Loader;
