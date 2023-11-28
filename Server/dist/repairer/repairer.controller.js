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
exports.RepairerController = void 0;
const common_1 = require("@nestjs/common");
const repairer_service_1 = require("./repairer.service");
let RepairerController = class RepairerController {
    constructor(repairerService) {
        this.repairerService = repairerService;
    }
    repairerAwaitRepair(req) {
        return this.repairerService.repairerAwaitRepair(req.payload);
    }
    repairerRepairered(req) {
        return this.repairerService.repairerRepairered(req.payload);
    }
    statement(params) {
        return this.repairerService.statement(params);
    }
};
__decorate([
    (0, common_1.Get)('repairerawaitrepair'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RepairerController.prototype, "repairerAwaitRepair", null);
__decorate([
    (0, common_1.Get)('repairerrepairered'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RepairerController.prototype, "repairerRepairered", null);
__decorate([
    (0, common_1.Post)('statement'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RepairerController.prototype, "statement", null);
RepairerController = __decorate([
    (0, common_1.Controller)('repairer'),
    __metadata("design:paramtypes", [repairer_service_1.RepairerService])
], RepairerController);
exports.RepairerController = RepairerController;
//# sourceMappingURL=repairer.controller.js.map