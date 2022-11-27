import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from '@/infrastructure/common/filter/exepcetion.filter';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { LoggingInterceptor } from '@/infrastructure/common/interceptors/logging/logging.interceptor';
import { ResponseInterceptor } from '@/infrastructure/common/interceptors/response/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
}

bootstrap();
