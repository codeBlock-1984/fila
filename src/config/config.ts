import dotenv from 'dotenv';
import { IConfig } from '../interfaces/config.type';

dotenv.config();

const config: IConfig = {
  app: {
    port: process.env.PORT ?? '',
    env: process.env.NODE_ENV ?? ''
  }
};

export default config;
