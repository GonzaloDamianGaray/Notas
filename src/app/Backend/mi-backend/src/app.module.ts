import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaModule } from './notas/notas.module';
import { Notas } from './notas/entity/notas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nootas',
      entities: [Notas],
      synchronize: false, // No uses esto en producción, puede causar pérdida de datos
    }),
    TypeOrmModule.forFeature([]),
    NotaModule, // Importa el repositorio
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
