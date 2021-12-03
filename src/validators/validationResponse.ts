import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

/**
 * 
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {NextFunction} next - next middleware function
 */
export default (req: Request, res: Response, next: NextFunction): void => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const err = result.array()
      .reduce((acc, { msg, param }) => ({ ...acc, [param]: msg }),
        {});

    const { requestId } = res.locals;
    res.status(400).json({
      requestId,
      status: 400,
      message: 'A validation error occurred!',
      data: err
    });
  } else {
    next();
  }
};
