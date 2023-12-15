import { Module } from '@nestjs/common';
import { DeviseService } from './devise.service';
import { DeviseResolver } from './devise.resolver';

@Module({
  providers: [DeviseResolver, DeviseService],
})
export class DeviseModule {}
