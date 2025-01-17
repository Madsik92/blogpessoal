import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  // Habilita globalmente a validacao de dados
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando CORS na aplicacao
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
