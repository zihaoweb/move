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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./admin.entity");
const adminpc_entity_1 = require("./adminpc.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const repairer_entity_1 = require("../repairer/repairer.entity");
const history_entity_1 = require("../history/history.entity");
const building_entity_1 = require("../options/building.entity");
const bcryptjs_1 = require("bcryptjs");
const axios_1 = require("axios");
let AdminService = class AdminService {
    constructor(jwtService, AdminModel, AdminPcModel, RepairerModel, HistoryModel, BuildingModel) {
        this.jwtService = jwtService;
        this.AdminModel = AdminModel;
        this.AdminPcModel = AdminPcModel;
        this.RepairerModel = RepairerModel;
        this.HistoryModel = HistoryModel;
        this.BuildingModel = BuildingModel;
    }
    async login(params) {
        let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx6302ea276b6886d1&secret=28ef44e2d9c0f2c5d71b5898145a967d&js_code=${params.code}&grant_type=authorization_code`;
        const { data } = await axios_1.default.get(url);
        const u = await this.AdminModel.findOne({
            where: { openid: data.openid }
        });
        const info = {
            openid: data.openid, nickName: params.nickName,
            avatarUrl: params.avatarUrl
        };
        if (!u) {
            await this.AdminModel.save(info);
            await this.RepairerModel.save(info);
            return {
                token: this.jwtService.sign({
                    openid: data.openid,
                    nickName: params.nickName,
                }),
                data,
            };
        }
        else {
            const { nickName, openid, admin } = u;
            data['admin'] = admin;
            return {
                token: this.jwtService.sign({
                    openid,
                    nickName,
                }),
                data,
            };
        }
    }
    async loginpc(params) {
        const { uname, pwd } = params;
        const u = await this.AdminPcModel.findOne({
            where: { uname }
        });
        if (!u) {
            throw new common_1.HttpException('该用户不存在！', common_1.HttpStatus.BAD_REQUEST);
        }
        const bool = (0, bcryptjs_1.compareSync)(pwd, u.pwd);
        if (bool) {
            const { uname, pwd } = u;
            return {
                token: this.jwtService.sign({
                    uname,
                    pwd
                })
            };
        }
        else {
            throw new common_1.HttpException({
                message: '账号或密码错误'
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async register(params) {
        console.log(params);
        const { uname, pwd } = params;
        const u = await this.AdminPcModel.findOne({
            where: { uname }
        });
        if (u) {
            throw new common_1.HttpException({ message: '用户已经存在' }, common_1.HttpStatus.BAD_REQUEST);
        }
        params.pwd = (0, bcryptjs_1.hashSync)(pwd);
        await this.AdminPcModel.save(params);
        return true;
    }
    async findAll() {
        const list = await this.BuildingModel.find();
        return list;
    }
    async addBuilding(body) {
        const { name } = body;
        const live = await this.BuildingModel.findOne({
            where: { name }
        });
        if (!live) {
            await this.BuildingModel.save(body);
        }
    }
    async delBuilding(body) {
        const { id } = body;
        const live = await this.BuildingModel.findOne({
            where: { id }
        });
        const res = await this.BuildingModel.delete(live);
        if (res.affected == 1) {
            return true;
        }
        else {
            throw new Error('异常');
        }
    }
    async searchAll(body) {
        const { page, limit } = body;
        const allCount = await this.HistoryModel.count();
        const alllist = await this.HistoryModel.find({
            skip: (page - 1) * limit,
            take: limit
        });
        return {
            totalCount: allCount,
            list: alllist,
            page,
            limit
        };
    }
    async verify() {
        return true;
    }
    async selectRepairer() {
        const repairerList = await this.RepairerModel.find();
        return repairerList;
    }
    async dispatch(params) {
        const { uuid, openid } = params;
        const res = await this.HistoryModel.update({ uuid }, {
            beloneTo: openid,
            dispatched: '1',
            dispatch: '0'
        });
        if (res.affected == 1) {
            return true;
        }
        else {
            throw new Error('更新失败');
        }
    }
    async rejectItem(query) {
        const { uuid, reason } = query;
        const res = await this.HistoryModel.update({ uuid }, {
            reject: '1',
            dispatch: '0',
            rejectreason: reason
        });
        if (res.affected == 1) {
            return true;
        }
        else {
            throw new Error('更新失败');
        }
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(adminpc_entity_1.AdminPcEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(repairer_entity_1.RepairerEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(history_entity_1.HistoryEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(building_entity_1.BuildingEntity)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map