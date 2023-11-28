"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_controller_1 = require("./admin.controller");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./admin.entity");
const adminpc_entity_1 = require("./adminpc.entity");
const repairer_entity_1 = require("../repairer/repairer.entity");
const jwt_1 = require("@nestjs/jwt");
const jwt_2 = require("../config/jwt");
const history_entity_1 = require("../history/history.entity");
const building_entity_1 = require("../options/building.entity");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([admin_entity_1.AdminEntity, repairer_entity_1.RepairerEntity, history_entity_1.HistoryEntity, adminpc_entity_1.AdminPcEntity, building_entity_1.BuildingEntity]),
            jwt_1.JwtModule.register({
                secret: jwt_2.secret,
                signOptions: { expiresIn: jwt_2.expiresIn },
            }),
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map