import { Request, Response, NextFunction } from 'express';
import { logger } from '../helpers/logger';

/**
 * 
 * @param {Error} err - error object
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {NextFunction} next - next middleware function
 * 
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err) {
    logger.error(err.message);
  }
  next(err);
};
