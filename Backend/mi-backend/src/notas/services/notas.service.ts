import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notas } from '../entity/notas.entity';

@Injectable()
export class NotaService {
  constructor(
    @InjectRepository(Notas)
    private readonly notaRepository: Repository<Notas>,
  ) {}

  findAll(): Promise<Notas[]> {
    return this.notaRepository.find();
  }
}