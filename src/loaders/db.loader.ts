import { createConnection } from 'typeorm';
import { connectionDetails } from '../config/ormconfig';

/**
 * Connects the database
 * @returns {Promise} - 
 */
const loader = async (): Promise<void> => {
  await createConnection(connectionDetails);
};

export default loader;
