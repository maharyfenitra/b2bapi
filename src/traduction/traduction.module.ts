import { Module } from '@nestjs/common';
import { TraductionService } from './traduction.service';
import { TraductionResolver } from './traduction.resolver';

@Module({
  providers: [TraductionResolver, TraductionService],
})
export class TraductionModule { }
