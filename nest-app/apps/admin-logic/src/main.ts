import { NestFactory } from '@nestjs/core';
import { AdminLogicModule } from './admin-logic.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminLogicModule);
  await app.listen(3012);
}
bootstrap();
