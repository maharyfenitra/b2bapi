import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceModule } from './invoice/invoice.module';
import { DeliveryModule } from './delivery/delivery.module';
import { PaymentModule } from './payment/payment.module';
import { AccountingModule } from './accounting/accounting.module';
import { ItemModule } from './item/item.module';
import { DeviseModule } from './devise/devise.module';
import { TraductionModule } from './traduction/traduction.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: [process.cwd(), 'src/schema.gql'].join('/'),
    }),
    MongooseModule.forRoot('mongodb://localhost/b2b'),

    UsersModule, OrderModule, InvoiceModule, DeliveryModule, PaymentModule, AccountingModule, ItemModule, DeviseModule, TraductionModule],

})
export class AppModule { }
