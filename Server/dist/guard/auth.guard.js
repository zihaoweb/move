"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const jwt_1 = require("../config/jwt");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { headers, path, route } = context.switchToRpc().getData();
        if (jwt_1.whiteList.includes(path)) {
            return true;
        }
        const token = headers.authorization || request.headers.authorization;
        if (token) {
            const payload = await this.verifyToken(token, jwt_1.secret);
            request.payload = payload;
            return true;
        }
        else {
            throw new common_1.HttpException('你还没登录,请先登录', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    verifyToken(token, secret) {
        return new Promise((resolve) => {
            jwt.verify(token, secret, (error, payload) => {
                if (error) {
                    throw new common_1.HttpException('身份验证失败', common_1.HttpStatus.UNAUTHORIZED);
                }
                else {
                    resolve(payload);
                }
            });
        });
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map