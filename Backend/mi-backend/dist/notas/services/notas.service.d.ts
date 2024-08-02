import { Repository } from 'typeorm';
import { Notas } from '../entity/notas.entity';
import { CreateNotaDto } from '../dto/create-nota.dto';
export declare class NotaService {
    private readonly notaRepository;
    constructor(notaRepository: Repository<Notas>);
    findAll(): Promise<Notas[]>;
    create(createNotaDto: CreateNotaDto): Promise<Notas>;
    update(id: number, updateNotaDto: CreateNotaDto): Promise<Notas>;
    remove(id: number): Promise<void>;
}
