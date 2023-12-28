import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslationsResolver } from './translations.resolver';
import { Translation, TranslationSchema } from './schema/transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Translation.name,
        schema: TranslationSchema,
      },
    ]),
  ],
  providers: [TranslationsResolver, TranslationsService],
})
export class TranslationsModule {}
