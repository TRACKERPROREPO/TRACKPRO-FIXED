import { NestFactory } from '@nestjs/core';
import { DoctorLogicModule } from './doctor-logic.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(DoctorLogicModule);
  const logger: Logger = new Logger('Doctor Logic', {
    timestamp: true,
  });
  await app.listen(process.env.DOCTOR_PORT);
  logger.log('Doctor Logic app running on ' + process.env.DOCTOR_PORT);
}
bootstrap();
