import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './guard/auth.guard';
import { TransformInterceptor } from './interceptor/transform.interceptor';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3001);
}
bootstrap();
