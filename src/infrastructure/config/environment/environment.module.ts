import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment.service';

@Module({
  providers: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
