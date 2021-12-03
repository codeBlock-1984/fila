import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
@Entity()
/**
 * Class representing a user
 */
export class File {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  size!: number;

  @Column()
  format!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

}
