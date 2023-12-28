import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateDeliveryInput } from './dto/create-delivery.input';
import { UpdateDeliveryInput } from './dto/update-delivery.input';
import { InjectModel } from '@nestjs/mongoose';
import { Delivery } from './shemas/delivery.schema';
import { DeliveryEntity } from './entities/delivery.entity';

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectModel(Delivery.name) private deliveryModel: Model<Delivery>,
  ) {}

  async create(
    createDeliveryInput: CreateDeliveryInput,
  ): Promise<DeliveryEntity> {
    const response = await new this.deliveryModel(createDeliveryInput).save();
    return response;
  }

  async findAll(): Promise<DeliveryEntity[]> {
    return await this.deliveryModel.find().exec();
  }

  async findOne(id: string) {
    return await this.deliveryModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateDeliveryInput: UpdateDeliveryInput,
  ): Promise<DeliveryEntity> {
    const response = await this.deliveryModel.findOneAndUpdate(
      { _id: id },
      updateDeliveryInput,
    );
    return {
      ...response,
      ...updateDeliveryInput,
    };
  }

  async remove(id: string): Promise<DeliveryEntity> {
    return await this.update(id, { status: 0 });
  }
}
