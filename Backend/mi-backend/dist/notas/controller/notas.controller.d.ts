import { NotaService } from '../services/notas.service';
import { Notas } from '../entity/notas.entity';
export declare class NotaController {
    private readonly notaService;
    constructor(notaService: NotaService);
    findAll(): Promise<Notas[]>;
}
