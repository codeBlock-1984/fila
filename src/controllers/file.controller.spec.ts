import { mockRequest, mockResponse } from 'jest-mock-req-res';

import { FileController } from './file.controller';
import { FileService } from '../services/file.service';
import { DeleteResult } from 'typeorm';


const err = new Error('operation failed');
const fileForm = {
  name: 'test file',
  size: 234,
  format: 'pdf'
};
const testFile = {
  id: 5,
  name: 'test file',
  size: 234,
  format: 'pdf',
  createdAt: new Date('2021-12-05T08:30:00'),
  updatedAt: new Date('2021-12-05T08:30:00')
};
const files = [testFile];
const pageResponse = (page: number, limit: number, data: any[]) =>
  ({ 
    total: data.length,
    current: data.length,
    page,
    limit,
    records: data
  });
const getFile = (id: number) => files.find(i => i.id === id);
const fileExists = (id: number) => files.findIndex(i => i.id === id) !== -1;
const req = mockRequest();
const res = mockResponse();
const next = jest.fn();

const mockCreate = jest.spyOn(FileService, 'create');
mockCreate.mockImplementation((obj: any) => Promise.resolve(obj));

const mockList = jest.spyOn(FileService, 'list');
mockList.mockImplementation((page = 1, limit = 10) => 
  Promise.resolve(pageResponse(page, limit, files)));

const mockGetById = jest.spyOn(FileService, 'getById');
mockGetById.mockImplementation((id: number) => 
  Promise.resolve(getFile(id)));

const mockExists = jest.spyOn(FileService, 'exists');
mockExists.mockImplementation((id: number) => 
    Promise.resolve(fileExists(id)));

const mockDelete = jest.spyOn(FileService, 'delete');
mockDelete.mockImplementation((id: number) => 
    Promise.resolve({} as DeleteResult));


describe('File Controller:', () => {
  describe('create', () => {
    beforeAll(() => {
      req.body = testFile;
    });
    afterEach(() => {
      mockCreate.mockClear();
      next.mockClear();
    });

    test('should create a file', async () => {
      await FileController.create(req, res, next);
  
      expect(mockCreate).toHaveBeenCalledTimes(1);
      expect(mockCreate).toHaveBeenCalledWith(fileForm);
      expect(res.locals.data).toBeDefined();
      expect(res.locals.data.status).toEqual(201);
      expect(res.locals.data.message).toEqual('File created successfully.');
      expect(res.locals.data.data).toEqual(fileForm);
      expect(next).toHaveBeenCalledTimes(1);
    });
  
    test('should call next function with error', async () => {
      mockCreate.mockImplementation(() => Promise.reject(err));
      await FileController.create(req, res, next);
  
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith(err);
    });
  });

  describe('list', () => {
    beforeAll(() => {
      req.query = { page: '1', limit: '10' };
    });
    afterEach(() => {
      mockList.mockClear();
      next.mockClear();
    });

    test('should return a list of files', async () => {
      await FileController.list(req, res, next);
  
      expect(mockList).toHaveBeenCalledTimes(1);
      expect(mockList).toHaveBeenCalledWith(1, 10);
      expect(res.locals.data).toBeDefined();
      expect(res.locals.data.status).toEqual(200);
      expect(res.locals.data.message).toEqual('Files fetched successfully.');
      expect(res.locals.data.data).toEqual(pageResponse(1, 10, files));
      expect(next).toHaveBeenCalledTimes(1);
    });
  
    test('should call next function with error', async () => {
      mockList.mockImplementation(() => Promise.reject(err));
      await FileController.list(req, res, next);
  
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith(err);
    });
  });

  describe('getById', () => {
    beforeAll(() => {
      req.params = { id: '5' };
    });
    afterEach(() => {
      mockGetById.mockClear();
      mockExists.mockClear();
      next.mockClear();
    });

    test('should return a files', async () => {
      await FileController.getById(req, res, next);
  
      expect(mockExists).toHaveBeenCalledTimes(1);
      expect(mockExists).toHaveBeenCalledWith(5);
      expect(mockGetById).toHaveBeenCalledTimes(1);
      expect(mockGetById).toHaveBeenCalledWith(5);
      expect(res.locals.data).toBeDefined();
      expect(res.locals.data.status).toEqual(200);
      expect(res.locals.data.message).toEqual('File fetched successfully.');
      expect(res.locals.data.data).toEqual(getFile(5));
      expect(next).toHaveBeenCalledTimes(1);
    });
  
    test('should call next function with error', async () => {
      mockGetById.mockImplementation(() => Promise.reject(err));
      await FileController.getById(req, res, next);
  
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith(err);
    });

    test('should return a 404 error', async () => {
      req.params.id = '1';
      await FileController.getById(req, res, next);
  
      expect(mockExists).toHaveBeenCalledTimes(1);
      expect(mockExists).toHaveBeenCalledWith(1);
      expect(mockGetById).toHaveBeenCalledTimes(0);
      expect(res.locals.data).toBeDefined();
      expect(res.locals.data.status).toEqual(404);
      expect(res.locals.data.message).toEqual('File not found.');
      expect(res.locals.data.data).toEqual({ id: 1 });
      expect(next).toHaveBeenCalledTimes(1);
    });
  });

  describe('delete', () => {
    beforeAll(() => {
      req.params = { id: '5' };
    });
    afterEach(() => {
      mockDelete.mockClear();
      mockExists.mockClear();
      next.mockClear();
    });

    test('should return a files', async () => {
      await FileController.delete(req, res, next);
  
      expect(mockExists).toHaveBeenCalledTimes(1);
      expect(mockExists).toHaveBeenCalledWith(5);
      expect(mockDelete).toHaveBeenCalledTimes(1);
      expect(mockDelete).toHaveBeenCalledWith(5);
      expect(res.locals.data).toBeDefined();
      expect(res.locals.data.status).toEqual(200);
      expect(res.locals.data.message).toEqual('File deleted successfully.');
      expect(res.locals.data.data).toEqual({ id: 5 });
      expect(next).toHaveBeenCalledTimes(1);
    });
  
    test('should call next function with error', async () => {
      mockDelete.mockImplementation(() => Promise.reject(err));
      await FileController.delete(req, res, next);
  
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith(err);
    });

    test('should return a 404 error', async () => {
      req.params.id = '1';
      await FileController.delete(req, res, next);
  
      expect(mockExists).toHaveBeenCalledTimes(1);
      expect(mockExists).toHaveBeenCalledWith(1);
      expect(mockDelete).toHaveBeenCalledTimes(0);
      expect(res.locals.data).toBeDefined();
      expect(res.locals.data.status).toEqual(404);
      expect(res.locals.data.message).toEqual('File not found.');
      expect(res.locals.data.data).toEqual({ id: 1 });
      expect(next).toHaveBeenCalledTimes(1);
    });
  });
});
