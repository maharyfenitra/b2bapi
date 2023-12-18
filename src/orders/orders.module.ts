import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrderDetails, OrderDetailsSchema } from './schemas/order-details.schema';
import { OrderDetailsService } from './services/order-details.service';
import { OrdersResolver } from './orders.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Order.name,
    schema: OrderSchema
  }]),
  MongooseModule.forFeature([{
    name: OrderDetails.name,
    schema: OrderDetailsSchema
  }])
],
  providers: [OrdersResolver, OrdersService, OrderDetailsService],
})
export class OrdersModule {}
