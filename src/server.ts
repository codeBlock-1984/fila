import http from 'http';
import config from './config';

import appLoader from './app';

/**
 * Creates and starts the server
 * @returns {Promise} - 
 */
const startServer = async (): Promise<void> => {
  try {
    const port = config.app.port;
    const app = await appLoader();
    const server = http.createServer(app);

    server.listen(port, () => {
      console.log(`Modular server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(`App failed to start: ${error.message}`);
  }
};

startServer();
