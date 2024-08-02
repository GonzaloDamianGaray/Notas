"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notas_entity_1 = require("../entity/notas.entity");
let NotaService = class NotaService {
    constructor(notaRepository) {
        this.notaRepository = notaRepository;
    }
    async findAll() {
        return this.notaRepository.find();
    }
    async create(createNotaDto) {
        const newNota = this.notaRepository.create(createNotaDto);
        return this.notaRepository.save(newNota);
    }
    async update(id, updateNotaDto) {
        const nota = await this.notaRepository.findOneBy({ id });
        if (!nota) {
            throw new common_1.NotFoundException(`No se encontro la id: ${id}`);
        }
        Object.assign(nota, updateNotaDto);
        return this.notaRepository.save(nota);
    }
    async remove(id) {
        const result = await this.notaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`No se encontro la id: ${id}`);
        }
    }
};
exports.NotaService = NotaService;
exports.NotaService = NotaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notas_entity_1.Notas)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotaService);
//# sourceMappingURL=notas.service.js.map