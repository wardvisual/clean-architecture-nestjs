import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [EnvironmentConfigModule, TypeormModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
