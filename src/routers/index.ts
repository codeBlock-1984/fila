import { Router } from 'express';
import fileRouter from './file.router';

const router: Router = Router();

router.use('/files', fileRouter);

export default router;
