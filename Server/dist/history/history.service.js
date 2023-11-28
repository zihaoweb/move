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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const history_entity_1 = require("./history.entity");
let HistoryService = class HistoryService {
    constructor(HistoryModel) {
        this.HistoryModel = HistoryModel;
    }
    async history(req) {
        const { openid } = req.payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.openid = :openid', { openid })
            .andWhere(new typeorm_2.Brackets((qb) => {
            qb.where('repair.dispatch = :dispatch', { dispatch: '1' }).orWhere('repair.reject = :reject', { reject: '1' });
        }))
            .orderBy('repair.dispatch', 'DESC');
        const list = await res.getMany();
        return list;
    }
    async addRepair(params, req) {
        const { openid } = req.payload;
        params.openid = openid;
        console.log('@@');
        await this.HistoryModel.save(params);
        return true;
    }
    async repaired(req) {
        const { openid } = req.payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.openid = :openid', { openid })
            .andWhere('repair.repaired = :repaired', { repaired: '1' });
        const list = await res.getMany();
        return list;
    }
    async awaitRepair(req) {
        const { openid } = req.payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.openid = :openid', { openid })
            .andWhere('repair.dispatched = :dispatched', { dispatched: '1' });
        const list = await res.getMany();
        return list;
    }
    async adminHistory(req) {
        const { openid } = req.payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.openid = :openid', { openid })
            .andWhere("repair.dispatch = :dispatch", { dispatch: '1' });
        const list = await res.getMany();
        return list;
    }
    async reject(req) {
        const { openid } = req.payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.openid = :openid', { openid })
            .andWhere("repair.reject = :reject", { reject: '1' });
        const list = await res.getMany();
        return list;
    }
    async recall(req) {
        const { openid } = req.payload;
        const res = this.HistoryModel.createQueryBuilder('repair')
            .where('repair.openid = :openid', { openid })
            .andWhere('repair.recall = :recall', { recall: '1' });
        const list = await res.getMany();
        return list;
    }
    async callback(params) {
        const res = await this.HistoryModel.update(params, {
            recall: '1',
            dispatch: '0',
        });
        if (res.affected == 1) {
            return true;
        }
        else {
            throw new Error('更新失败');
        }
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.HistoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map