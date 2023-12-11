import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Yes!Chef API')
    .setDescription('API description for Yes!Chef')
    .setVersion('1.0')
    .addTag('Yes!Chef')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  writeFileSync('./swagger-spec.json', JSON.stringify(document));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
