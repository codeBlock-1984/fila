import { IDBConfig } from '../interfaces/config.type';

const getConfig = (): IDBConfig => ({
  production: {
    host: process.env.DATABASE_HOST ?? '',
    port: process.env.DATABASE_PORT ?? '',
    username: process.env.DATABASE_USERNAME ?? '',
    password: process.env.DATABASE_PASSWORD ?? '',
    database: process.env.DATABASE_NAME ?? ''
  },
  development: {
    host: process.env.DATABASE_HOST_DEV ?? '',
    port: process.env.DATABASE_PORT_DEV ?? '',
    username: process.env.DATABASE_USERNAME_DEV ?? '',
    password: process.env.DATABASE_PASSWORD_DEV ?? '',
    database: process.env.DATABASE_NAME_DEV ?? ''
  },
  test: {
    host: process.env.DATABASE_HOST_TEST ?? '',
    port: process.env.DATABASE_PORT_TEST ?? '',
    username: process.env.DATABASE_USERNAME_TEST ?? '',
    password: process.env.DATABASE_PASSWORD_TEST ?? '',
    database: process.env.DATABASE_NAME_TEST ?? ''
  }
});

export default getConfig;
