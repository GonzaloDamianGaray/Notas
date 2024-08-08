import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;
}
