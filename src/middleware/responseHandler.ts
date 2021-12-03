import { NextFunction, Request, Response } from 'express';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/**
 * 
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {NextFunction} next - next middleware function
 */
export const responseHandler = (req: Request, res: Response, next: NextFunction): void => {
  try {
    if (res.locals.data) {
      const { requestId, data } = res.locals;
      const { status } = data;
      res.status(status).json({ requestId, ...data });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
