import { Request, Response, NextFunction } from 'express';
import { FileForm } from '../forms/file.form';
import { apiResponse } from '../helpers/apiResponse';
import { Pagination } from '../interfaces/pagination.type';
import { FileService } from '../services/file.service';

/**
 * File controller class
 */
export class FileController {

  /**
   * 
   * @param {Request} req - request object 
   * @param {Response} res - resonse object
   * @param {NextFunction} next - next middleware function
   * 
   * @returns {Promise} - 
   */
  static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, size, format }: FileForm = req.body;

      const result = await FileService.create({ name, size, format });
      res.locals.data = apiResponse(201, 'File created successfully.', result);

      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   * 
   * @param {Request} req - request object 
   * @param {Response} res - resonse object
   * @param {NextFunction} next - next middleware function
   * 
   * @returns {Promise} - 
   */
  static async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page = 1, limit = 10 }: Pagination = req.query;

      const result = await FileService.list(+page, +limit);
      res.locals.data = apiResponse(200, 'Files fetched successfully.', result);

      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   * 
   * @param {Request} req - request object 
   * @param {Response} res - resonse object
   * @param {NextFunction} next - next middleware function
   * 
   * @returns {Promise} - 
   */
  static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const parsedId = Number(id);

      const exists = await FileService.exists(parsedId);

      if (!exists) {
        res.locals.data = apiResponse(404, 'File not found.', { id: parsedId });
      } else {
        const result = await FileService.getById(parsedId);
        res.locals.data = apiResponse(200, 'File fetched successfully.', result);
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   * 
   * @param {Request} req - request object 
   * @param {Response} res - resonse object
   * @param {NextFunction} next - next middleware function
   * 
   * @returns {Promise} - 
   */
  static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const parsedId = Number(id);

      const exists = await FileService.exists(parsedId);

      if (!exists) {
        res.locals.data = apiResponse(404, 'File not found.', { id: parsedId });
      } else {
        await FileService.delete(parsedId);
        res.locals.data = apiResponse(200, 'File deleted successfully.', { id: parsedId });
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}