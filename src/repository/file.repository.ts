import { EntityRepository, Repository } from 'typeorm';
import { File } from '../database/entity/File';

@EntityRepository(File)
/**
 * File repository class
 */
export class FileRepository extends Repository<File> {
}
