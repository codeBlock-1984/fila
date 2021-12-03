import { ConnectionOptions } from 'typeorm';
import config from './config';

const isProd = config.app.env === 'production';
const ext = `${ isProd ? 'js' : 'ts'}`;
const dir = `${ isProd ? 'dist' : 'src' }`;

const dbConfig = config.db[config.app.env];

export const connectionDetails: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  ...dbConfig as {},
  synchronize: !isProd,
  logging: false,
  entities: [`${dir}/database/index.${ext}`],
  migrations: [`${dir}/database/migration/**/*.${ext}`],
  subscribers: [`${dir}/database/subscriber/**/*.${ext}`],
  cli: {
    entitiesDir: `${dir}/database/entity`,
    migrationsDir: `${dir}/database/migration`,
    subscribersDir: `${dir}/database/subscriber`,
  },
};
