import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './schemas/customer.schema';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async create(
    createCustomerInput: CreateCustomerInput,
  ): Promise<CustomerEntity> {
    return await new this.customerModel(createCustomerInput).save();
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<CustomerEntity> {
    return await this.customerModel.findById(id).exec();
  }

  async update(id: string, updateCustomerInput: UpdateCustomerInput) {
    return await this.customerModel.findOneAndUpdate(
      { _id: id },
      updateCustomerInput,
    );
  }

  async remove(id: string): Promise<CustomerEntity> {
    return await this.customerModel.findOneAndUpdate(
      { _id: id },
      { status: 0 },
    );
  }
}
