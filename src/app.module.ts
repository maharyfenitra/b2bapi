import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountingModule } from './accounting/accounting.module';
import { TranslationsModule } from './translations/translations.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { PayementsModule } from './payements/payements.module';
import { ItemsModule } from './items/items.module';
import { OrdersModule } from './orders/orders.module';
import { InvoicesModule } from './invoices/invoices.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: [process.cwd(), 'src/schema.gql'].join('/'),
    }),
    MongooseModule.forRoot('mongodb://localhost/b2b'),

    UsersModule,
    AccountingModule,
    TranslationsModule,
    CurrenciesModule,
    DeliveriesModule,
    PayementsModule,
    ItemsModule,
    OrdersModule,
    InvoicesModule,
    SuppliersModule,
    CustomersModule,
  ],
})
export class AppModule {}
