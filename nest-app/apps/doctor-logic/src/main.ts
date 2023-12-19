import { NestFactory } from '@nestjs/core';
import { DoctorLogicModule } from './doctor-logic.module';

async function bootstrap() {
  const app = await NestFactory.create(DoctorLogicModule);
  await app.listen(3000);
}
bootstrap();
