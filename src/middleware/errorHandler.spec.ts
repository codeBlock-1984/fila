import { mockRequest, mockResponse } from 'jest-mock-req-res';

import { errorHandler } from './errorHandler';
import * as log from '../helpers/logger';


const err = new Error('operation failed');
const req = mockRequest();
const res = mockResponse();
const next = jest.fn();

const mock = jest.spyOn(log.logger, 'error');
mock.mockImplementation(jest.fn());


describe('Error Handler:', () => {
  test('should create a file', () => {
    errorHandler(err, req, res, next);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(err.message);
  });
});
