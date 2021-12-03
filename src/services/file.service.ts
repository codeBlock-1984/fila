import { getCustomRepository } from 'typeorm';
import { File } from '../database/entity/File';
import { FileForm } from '../forms/file.form';
import { PagedResponse } from '../models/pagedResponse.model';
import { FileRepository } from '../repository/file.repository';

/**
 * File service class
 */
export class FileService {

  /**
   * 
   * @param {FileForm} form - file object form 
   * @returns {Promise} - file entity
   */
  static async create(form: FileForm): Promise<File> {
    const file = await getCustomRepository(FileRepository)
      .save(form);

    return file;
  }

  /**
   * 
   * @param {number} page - page number
   * @param {number} limit - number of records to fetch
   * @returns {Promise} - paged response
   */
  static async list(page = 1, limit = 10): Promise<PagedResponse> {
    const repo = getCustomRepository(FileRepository);
    const total = await repo.count();
    const files = await repo
      .list(page, limit);

    return { 
      total,
      current: files.length,
      page,
      limit,
      records: files
    };
  }
}
