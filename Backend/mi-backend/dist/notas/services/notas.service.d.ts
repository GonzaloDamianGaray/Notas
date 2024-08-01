import { Repository } from 'typeorm';
import { Notas } from '../entity/notas.entity';
export declare class NotaService {
    private readonly notaRepository;
    constructor(notaRepository: Repository<Notas>);
    findAll(): Promise<Notas[]>;
}
