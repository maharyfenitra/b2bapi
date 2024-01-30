import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDetails } from '../schemas/order-details.schema';
import { CreateOrderDetailsInput } from '../dto/create-order-details.input';
import { OrderDetailsEntity } from '../entities/order-details.entity';
import { OrderDetailsInput } from '../dto/order-details.input';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectModel(OrderDetails.name)
    private orderDetailsModel: Model<OrderDetails>,
  ) {}

  async findOrderDetails(id: string): Promise<OrderDetailsEntity[]> {
    return await this.orderDetailsModel.find({ orderId: id });
  }
  async createOrderDetails(
    details: CreateOrderDetailsInput,
  ): Promise<OrderDetailsEntity[]> {
    return await this.orderDetailsModel.insertMany(
      details.orderDetailsInput.map((element) => {
        return {
          ...element,
          orderId: details.orderId,
        };
      }),
    );
  }

  async updateOrderDetails(
    orderId: string,
    details: OrderDetailsInput,
  ): Promise<OrderDetailsEntity> {
    if (!details.id) {
      throw new HttpException(
        'Id is required for updating details order line',
        HttpStatus.BAD_REQUEST,
      );
    }
    const response = await this.orderDetailsModel.findOneAndUpdate(
      { _id: details.id, orderId },
      { ...details },
    );
    return {
      ...response,
      ...details,
    };
  }
}
