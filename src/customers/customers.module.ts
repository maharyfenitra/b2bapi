import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema, Customer } from './schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
    ]),
  ],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
