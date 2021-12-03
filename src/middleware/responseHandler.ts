import { NextFunction, Request, Response } from 'express';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/**
 * 
 * @param {Error} err - error object
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {NextFunction} next - next middleware function
 */
export const responseHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  const { requestId, data } = res.locals;

  if (data) {
    const { status } = data;
    res.status(status).json({ requestId, ...data });
  } else if (err) {
    res.status(500).json({ requestId, status: 500, message: 'An unexpected error occurred!' });
  }
};
