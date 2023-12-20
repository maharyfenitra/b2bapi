import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './schemas/item.schema';
import { ItemEntity } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private itemModel: Model<Item>,
  ) {}
  async create(createItemInput: CreateItemInput): Promise<ItemEntity> {
    return await new this.itemModel(createItemInput).save();
  }

  async findAll(): Promise<ItemEntity[]> {
    return await this.itemModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  async update(id: string, updateItemInput: UpdateItemInput) {
    const response = await this.itemModel.findByIdAndUpdate(
      { _id: id },
      { ...updateItemInput },
    );
    return { ...response, ...updateItemInput };
  }

  async remove(id: string): Promise<ItemEntity> {
    const response = await this.itemModel.findByIdAndUpdate(
      { _id: id },
      { status: 0 },
    );
    return { ...response, status: 0 };
  }
}
