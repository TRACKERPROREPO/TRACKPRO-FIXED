import { NestFactory } from '@nestjs/core';
import { FarmerLogicModule } from './farmer-logic.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(FarmerLogicModule);
  await app.listen(process.env.FARMER_PORT);
  const logger: Logger = new Logger('Farmer Logic', {
    timestamp: true,
  });
  logger.log('app running on ' + process.env.FARMER_PORT);
}
bootstrap();
