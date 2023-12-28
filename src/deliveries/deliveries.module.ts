import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesResolver } from './deliveries.resolver';
import { Delivery, DeliverySchema } from './shemas/delivery.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Delivery.name,
        schema: DeliverySchema,
      },
    ]),
  ],
  providers: [DeliveriesResolver, DeliveriesService],
})
export class DeliveriesModule {}
