export interface IConfig {
  app: IAppConfig;
  db: IDBConfig;
  [index: string]: unknown;
}


interface IAppConfig {
  env: string;
  port: string;
  [index: string]: unknown;
}

export interface IDBConfig {
  production: IDBEnvConfig;
  development: IDBEnvConfig;
  test: IDBEnvConfig;
  [index: string]: unknown;
}

interface IDBEnvConfig {
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
  [index: string]: unknown;
}
