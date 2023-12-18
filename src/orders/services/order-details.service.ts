import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDetails } from '../schemas/order-details.schema';
import { CreateOrderDetailsInput } from '../dto/create-order-details.input';
import { OrderDetailsEntity } from '../entities/order-details.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectModel(OrderDetails.name)
    private orderDetailsModel: Model<OrderDetails>,
  ) {}

  async createOrderDetails(
    details: CreateOrderDetailsInput,
  ): Promise<OrderDetailsEntity[]> {
    return await this.orderDetailsModel.insertMany(
      details.orderDetailsInput.map((element) => {
        return {
          ...element,
          order_id: details.order_id,
        };
      }),
    );
  }
}
