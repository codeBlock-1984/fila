import { EntityRepository, Repository } from 'typeorm';
import { File } from '../database/entity/File';

@EntityRepository(File)
/**
 * File repository class
 */
export class FileRepository extends Repository<File> {

  /**
   * 
   * @param {number} page - page number
   * @param {number} limit - number of records to fetch
   * @returns {object} - 
   */
  list(page = 1, limit = 10) {
    return this.find({
      order: {
        updatedAt: 'DESC'
      },
      skip: limit * (page - 1),
      take: limit
    });
  }
}
