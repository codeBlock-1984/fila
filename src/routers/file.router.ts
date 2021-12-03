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

export default router;

