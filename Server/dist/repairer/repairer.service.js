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
exports.RepairerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const history_entity_1 = require("../history/history.entity");
const typeorm_2 = require("typeorm");
let RepairerService = class RepairerService {
    constructor(HistoryModel) {
        this.HistoryModel = HistoryModel;
    }
    async repairerAwaitRepair(payload) {
        const { openid } = payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.beloneTo = :beloneTo', { beloneTo: openid })
            .andWhere('repair.dispatched = :dispatched', { dispatched: '1' });
        const list = await res.getMany();
        return list;
    }
    async repairerRepairered(payload) {
        const { openid } = payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.beloneTo = :beloneTo', { beloneTo: openid })
            .andWhere('repair.repaired = :repaired', { repaired: '1' });
        const list = await res.getMany();
        return list;
    }
    async statement(params) {
        const { uuid } = params;
        const res = await this.HistoryModel.update({ uuid }, {
            dispatched: '0',
            repaired: '1'
        });
        if (res.affected == 1) {
            return true;
        }
        else {
            throw new Error('结单异常，请联系管理员');
        }
    }
};
RepairerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.HistoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RepairerService);
exports.RepairerService = RepairerService;
//# sourceMappingURL=repairer.service.js.map