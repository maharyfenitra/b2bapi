import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderInput } from '../dto/create-order.input';
import { UpdateOrderInput } from '../dto/update-order.input';
import { Order } from '../schemas/order.schema';
import { OrderEntity } from '../entities/order.entity';
import { CreateOrderDetailsInput } from '../dto/create-order-details.input';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsEntity } from '../entities/order-details.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private orderDetailsService: OrderDetailsService,
  ) {}

  async create(createOrderInput: CreateOrderInput): Promise<OrderEntity> {
    const response = await new this.orderModel({
      supplierId: createOrderInput.supplierId,
      reference: createOrderInput.reference,
      description: createOrderInput.description,
    }).save();

    const details = this.orderDetailsService.createOrderDetails({
      orderId: response.id,
      orderDetailsInput: createOrderInput.orderDetailsInput,
    });

    return {
      ...response,
      id: response.id,
      reference: response.reference,
      description: response.description,
      orderDetailsEntity: details as unknown as OrderDetailsEntity[],
    };
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

  async updateOrderDetails(orderDetails: CreateOrderDetailsInput) {
    const responses = orderDetails.orderDetailsInput.map(async (detail) => {
      //If id is not define that mean we should create a new line
      if (!detail.id) {
        const response = await this.orderDetailsService.createOrderDetails({
          orderId: orderDetails.orderId,
          orderDetailsInput: [detail],
        });

        //If every thing is OK we should get only one line in response overwise somehing get wrong
        if (!response[0]) {
          throw new HttpException(
            'Error when creation details',
            HttpStatus.EXPECTATION_FAILED,
          );
        }
        return response[0];
      }
      return await this.orderDetailsService.updateOrderDetails(
        orderDetails.orderId,
        detail,
      );
    });

    return responses;
  }
}
