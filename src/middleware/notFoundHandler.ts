import { Request, Response } from 'express';

/**
 * 
 * @param {Request} req - request object
 * @param {Response} res - response object
 */
export const notFoundHandler = (req: Request, res: Response): void => {
  const { requestId } = res.locals;
  res.status(404).json({ requestId, status: 404, message: 'The requested path does not exist.' });
};
