import { body } from 'express-validator';

export default {
  create: [
    body('name')
      .exists()
      .withMessage('name is required')
      .bail()
      .isString()
      .withMessage('invalid name'),
    body('size')
      .exists()
      .withMessage('size is required')
      .bail()
      .custom(val => typeof val === 'number')
      .withMessage('Invalid size'),
    body('format')
      .exists()
      .withMessage('format is required')
      .bail()
      .isString()
      .withMessage('invalid name')
  ]
};
