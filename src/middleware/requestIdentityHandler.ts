import { Request, Response, NextFunction } from 'express';
import { generateUUID } from '../utils/string.util';

/**
 * 
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {NextFunction} next - next middleware function
 */
export const requestIdentityHandler = (req: Request, res: Response, next: NextFunction): void => {
  res.locals.requestId = generateUUID();
  next();
};
