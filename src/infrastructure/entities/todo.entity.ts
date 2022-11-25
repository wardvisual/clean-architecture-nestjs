import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar')
  content: string;

  @Column('boolean', { default: false })
  isDone: boolean;

  @Column({ name: 'createdAt' })
  createdAt: Date;

  @Column({ name: 'updatedAt' })
  updatedAt: Date;
}
