import { getCustomRepository } from 'typeorm';
import { File } from '../database/entity/File';
import { FileForm } from '../forms/file.form';
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
}
