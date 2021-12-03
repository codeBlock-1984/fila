import { body, param, query } from 'express-validator';

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
  ],
  list: [
    query('page')
      .optional()
      .isInt()
      .withMessage('invalid limit')
      .bail()
      .toInt()
      .custom(val => typeof val === 'number')
      .withMessage('invalid page'),
    query('limit')
      .optional()
      .isInt()
      .withMessage('invalid limit')
      .bail()
      .toInt()
      .custom(val => typeof val === 'number')
      .withMessage('invalid limit')
  ],
  get: [
    param('id')
      .exists()
      .withMessage('id is required')
      .bail()
      .isInt()
      .withMessage('invalid id')
      .bail()
      .toInt()
      .custom(val => typeof val === 'number')
      .withMessage('invalid id')
  ],
  delete: [
    param('id')
      .exists()
      .withMessage('id is required')
      .bail()
      .isInt()
      .withMessage('invalid id')
      .bail()
      .toInt()
      .custom(val => typeof val === 'number')
      .withMessage('invalid id')
  ]
};
