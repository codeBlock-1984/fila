import path from 'path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import config from '../config';

const isProd = config.app.env === 'production'; 
const rootDir = require.main ? require.main.filename : '../..';

export const logger = winston.createLogger({
  level: 'info',
  transports: [
    new DailyRotateFile({
      filename: 'application-%DATE%.log',
      dirname: `${(require.main) ? path.dirname(rootDir) : rootDir}/../logs/`,
      level: 'info',
      handleExceptions: true,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],
});
 
if (!isProd) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    level: 'info'
  }));
}
