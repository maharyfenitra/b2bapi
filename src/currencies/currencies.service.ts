import { Injectable } from '@nestjs/common';
import { CreateCurrencyInput } from './dto/create-currency.input';
import { UpdateCurrencyInput } from './dto/update-currency.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Currency } from './schemas/currency.chema';
import { CurrencyEntity } from './entities/currency.entity';
@Injectable()
export class CurrenciesService {
  constructor(
    @InjectModel(Currency.name) private currencyModel: Model<Currency>,
  ) {}

  async create(
    createCurrencyInput: CreateCurrencyInput,
  ): Promise<CurrencyEntity> {
    return await new this.currencyModel(createCurrencyInput).save();
  }

  async findAll(): Promise<CurrencyEntity[]> {
    return await this.currencyModel.find().exec();
  }

  async findOne(id: string): Promise<CurrencyEntity> {
    return await this.currencyModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateCurrencyInput: UpdateCurrencyInput,
  ): Promise<CurrencyEntity> {
    const response = await this.currencyModel.findByIdAndUpdate(
      { _id: id },
      updateCurrencyInput,
    );
    return {
      ...response,
      ...updateCurrencyInput,
    };
  }

  remove(id: string) {
    return `This action removes a #${id} currency`;
  }
}
