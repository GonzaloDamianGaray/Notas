import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notas } from '../entity/notas.entity';
import { CreateNotaDto } from '../dto/create-nota.dto';

@Injectable()
export class NotaService {
  constructor(
    @InjectRepository(Notas)
    private readonly notaRepository: Repository<Notas>,
  ) {}


     /* Trae todas las notas*/ 

  async findAll(): Promise<Notas[]> {
    return this.notaRepository.find();
  }

      // Método para obtener una nota por ID
  async findOneById(id: number): Promise<Notas> {
    const nota = await this.notaRepository.findOneBy({ id });
    if (!nota) {
      throw new NotFoundException(`Nota con ID ${id} no encontrada`);
    }
    return nota;
  }



     /* crea nota*/ 

  async create(createNotaDto: CreateNotaDto): Promise<Notas> {
    const newNota = this.notaRepository.create(createNotaDto);
    return this.notaRepository.save(newNota);
  }

     /* Actualiza nota por id*/ 

  async update(id: number, updateNotaDto: CreateNotaDto): Promise<Notas> {
    const nota = await this.notaRepository.findOneBy({ id });
    if (!nota) {
      throw new NotFoundException(`No se encontro la id: ${id}`);
    }
    Object.assign(nota, updateNotaDto);
    return this.notaRepository.save(nota);

  }
   /* Elimina nota por id*/ 
  async remove(id: number): Promise<void> {
    const result = await this.notaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`No se encontro la id: ${id}`);
    }
  }
}
