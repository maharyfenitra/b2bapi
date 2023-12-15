import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslationsResolver } from './translations.resolver';

@Module({
  providers: [TranslationsResolver, TranslationsService],
})
export class TranslationsModule { }
