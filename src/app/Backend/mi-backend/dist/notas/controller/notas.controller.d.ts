import { NotaService } from '../services/notas.service';
import { Notas } from '../entity/notas.entity';
import { CreateNotaDto } from '../dto/create-nota.dto';
export declare class NotaController {
    private readonly notaService;
    constructor(notaService: NotaService);
    findAll(): Promise<Notas[]>;
    create(createNotaDto: CreateNotaDto): Promise<Notas>;
    update(id: number, updateNotaDto: CreateNotaDto): Promise<Notas>;
    remove(id: number): Promise<void>;
}
