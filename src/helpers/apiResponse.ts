import { ApiResponseModel } from '../models/apiResponse.model';

/**
 * 
 * @param {number} status - status code
 * @param {string} message - message text
 * @param {unknown} data - response body
 * 
 * @returns {ApiResponseModel} - API response object
 */
export const apiResponse = (status: number, message: string, data: unknown = null): ApiResponseModel => {
  const model: ApiResponseModel = {
    status,
    message,
    data
  };

  return model;
};
