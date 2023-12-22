import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesResolver } from './currencies.resolver';
import { CurrencySchema, Currency } from './schemas/currency.chema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Currency.name,
        schema: CurrencySchema,
      },
    ]),
  ],
  providers: [CurrenciesResolver, CurrenciesService],
})
export class CurrenciesModule {}
