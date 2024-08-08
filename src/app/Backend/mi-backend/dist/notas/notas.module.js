"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notas_service_1 = require("./services/notas.service");
const notas_controller_1 = require("./controller/notas.controller");
const notas_entity_1 = require("./entity/notas.entity");
let NotaModule = class NotaModule {
};
exports.NotaModule = NotaModule;
exports.NotaModule = NotaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notas_entity_1.Notas])],
        providers: [notas_service_1.NotaService],
        controllers: [notas_controller_1.NotaController],
    })
], NotaModule);
//# sourceMappingURL=notas.module.js.map