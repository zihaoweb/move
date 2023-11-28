"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const auth_guard_1 = require("./guard/auth.guard");
const transform_interceptor_1 = require("./interceptor/transform.interceptor");
const cors = require('cors');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalGuards(new auth_guard_1.AuthGuard());
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map