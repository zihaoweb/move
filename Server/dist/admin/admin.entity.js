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
exports.AdminEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminEntity = class AdminEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '0' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AdminEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '用户名', unique: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "openid", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '用户昵称' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "nickName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, comment: '用户头像' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "avatarUrl", void 0);
AdminEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_info' })
], AdminEntity);
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=admin.entity.js.map