import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderInput } from '../dto/create-order.input';
import { UpdateOrderInput } from '../dto/update-order.input';
import { Order } from '../schemas/order.schema';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(createOrderInput: CreateOrderInput): Promise<OrderEntity> {
    const response = await new this.orderModel(createOrderInput).save();
    return response;
  }

  async findAll(): Promise<OrderEntity[]> {
    return await this.orderModel.find();
  }

  async findOne(id: string) {
    const response = await this.orderModel.findOne({ _id: id }).exec();
    return response;
  }

  async update(id: string, updateOrderInput: UpdateOrderInput) {
    const response = await this.orderModel
      .findOneAndUpdate({ _id: id }, { ...updateOrderInput })
      .exec();
    return { ...response, ...updateOrderInput };
  }

  async remove(id: string) {
    const status = 0;
    const response = await this.orderModel
      .findOneAndUpdate({ _id: id }, { status })
      .exec();
    return { ...response, status, id: response._id };
  }
}
