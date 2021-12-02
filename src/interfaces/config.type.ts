export interface IConfig {
  app: IAppConfig;
  [index: string]: unknown;
}


interface IAppConfig {
  env: string;
  port: string;
  [index: string]: unknown;
}

