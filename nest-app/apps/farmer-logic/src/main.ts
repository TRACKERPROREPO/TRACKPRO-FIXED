import { NestFactory } from '@nestjs/core';
import { FarmerLogicModule } from './farmer-logic.module';

async function bootstrap() {
  const app = await NestFactory.create(FarmerLogicModule);
  await app.listen(3000);
}
bootstrap();
 