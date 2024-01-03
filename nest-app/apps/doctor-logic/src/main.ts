import { NestFactory } from '@nestjs/core';
import { DoctorLogicModule } from './doctor-logic.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(DoctorLogicModule);
  const config = new DocumentBuilder()
  .setTitle('TrackPro Doctor Doc')
  .setDescription('')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  const logger: Logger = new Logger('Doctor Logic', {
    timestamp: true,
  });
  await app.listen(process.env.DOCTOR_PORT);
  logger.log('Doctor Logic app running on ' + process.env.DOCTOR_PORT);
}
bootstrap();
