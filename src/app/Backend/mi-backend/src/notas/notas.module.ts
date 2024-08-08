// src/nota/nota.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaService } from './services/notas.service';
import { NotaController } from './controller/notas.controller';
import { Notas } from './entity/notas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notas])],
  providers: [NotaService],
  controllers: [NotaController],
})
export class NotaModule {}
