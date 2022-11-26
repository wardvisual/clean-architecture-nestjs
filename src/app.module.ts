import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmModule,
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
