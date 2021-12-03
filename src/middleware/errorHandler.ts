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
    const { requestId } = res.locals;

    logger.error(err.message);
    res.status(500).json({ requestId, status: 500, message: 'An unexpected error occurred!' });
  } else {
    next();
  }
};
