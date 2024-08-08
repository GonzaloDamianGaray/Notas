// src/nota/nota.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NotaService } from '../services/notas.service';
import { Notas } from '../entity/notas.entity';
import { CreateNotaDto } from '../dto/create-nota.dto';

@Controller('notas')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Get()
  async findAll(): Promise<Notas[]> {
    return this.notaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id')id: number): Promise<Notas>{
    return this.notaService.findOneById(id);
  }


  @Post()
  async create(@Body() createNotaDto: CreateNotaDto): Promise<Notas> {
    return this.notaService.create(createNotaDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateNotaDto: CreateNotaDto): Promise<Notas> {
    return this.notaService.update(id, updateNotaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.notaService.remove(id);
  }
}