import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTraductionInput } from './dto/create-traduction.input';
import { UpdateTraductionInput } from './dto/update-traduction.input';
import { Translation } from './schema/transaction.schema';
import { Model } from 'mongoose';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectModel(Translation.name) private translationModel: Model<Translation>,
  ) {}
  async create(createTraductionInput: CreateTraductionInput) {
    return await new this.translationModel(createTraductionInput).save();
  }

  async findAll() {
    return await this.translationModel.find();
  }

  async findOne(id: string) {
    return await this.translationModel.find({ _id: id });
  }

  async update(id: string, updateTraductionInput: UpdateTraductionInput) {
    const response = await this.translationModel.findByIdAndUpdate(
      id,
      updateTraductionInput,
    );

    return { ...response, ...updateTraductionInput };
  }

  async remove(id: string) {
    return await this.update(id, { status: 0 });
  }
}
