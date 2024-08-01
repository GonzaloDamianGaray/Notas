// src/nota/nota.controller.ts
import { Controller, Get } from '@nestjs/common';
import { NotaService } from '../services/notas.service';
import { Notas } from '../entity/notas.entity';

@Controller('notas')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Get()
  findAll(): Promise<Notas[]> {
    return this.notaService.findAll();
  }
}
