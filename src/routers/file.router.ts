import { Router } from 'express';
import { FileController } from '../controllers/file.controller';
import validator from '../validators/file.validator';
import validationResponse from '../validators/validationResponse';

const router: Router = Router();

router.post('/',
  validator.create,
  validationResponse,
  FileController.create);

router.get('/',
  validator.list,
  validationResponse,
  FileController.list);

router.get('/:id',
  validator.get,
  validationResponse,
  FileController.getById);

router.delete('/:id',
  validator.delete,
  validationResponse,
  FileController.delete);

export default router;

