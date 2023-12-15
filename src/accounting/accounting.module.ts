import { Module } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { AccountingResolver } from './accounting.resolver';

@Module({
  providers: [AccountingResolver, AccountingService],
})
export class AccountingModule {}
