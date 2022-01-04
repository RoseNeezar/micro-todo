import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const port = 5000;
  await app.listen(port);
  logger.log(`App run on port ${port}`);
}
bootstrap();
