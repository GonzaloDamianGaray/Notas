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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaController = void 0;
const common_1 = require("@nestjs/common");
const notas_service_1 = require("../services/notas.service");
let NotaController = class NotaController {
    constructor(notaService) {
        this.notaService = notaService;
    }
    findAll() {
        return this.notaService.findAll();
    }
};
exports.NotaController = NotaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "findAll", null);
exports.NotaController = NotaController = __decorate([
    (0, common_1.Controller)('notas'),
    __metadata("design:paramtypes", [notas_service_1.NotaService])
], NotaController);
//# sourceMappingURL=notas.controller.js.map