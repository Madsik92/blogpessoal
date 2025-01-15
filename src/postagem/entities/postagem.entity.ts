import { Transform } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces/metadata/transform-fn-params.interface';
import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn() //Int Auto_increment Primary Key
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() //Validacao dos dados do objeto
  @Column({ length: 100, nullable: false }) //Varchar(100) not null
  titulo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;
}
