import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule  } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    //app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
    .setTitle("todo-list-bug")
    .setDescription("Feel free to modify any part of it according to your specific needs!")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document);

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
