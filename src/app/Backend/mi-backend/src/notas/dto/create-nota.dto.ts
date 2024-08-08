import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNotaDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
