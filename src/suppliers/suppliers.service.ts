import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
import { Supplier } from './schemas/supplier.schema';
import { SupplierEntity } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Supplier.name) private suplierModel: Model<Supplier>,
  ) {}
  async create(
    createSupplierInput: CreateSupplierInput,
  ): Promise<SupplierEntity> {
    return await new this.suplierModel(createSupplierInput).save();
  }

  async findAll(): Promise<SupplierEntity[]> {
    return await this.suplierModel
      .find({ status: 1 })
      .sort({ createdAt: 'desc' })
      .exec();
  }

  async findOne(id: string): Promise<SupplierEntity> {
    return await this.suplierModel.findById(id).exec();
  }

  async update(
    id: string,
    updateSupplierInput: UpdateSupplierInput,
  ): Promise<SupplierEntity> {
    return {
      ...(await this.suplierModel.findOneAndUpdate(
        { _id: id },
        updateSupplierInput,
      )),
      ...updateSupplierInput,
    };
  }

  async remove(id: string): Promise<SupplierEntity> {
    return await this.suplierModel
      .findOneAndUpdate({ _id: id }, { status: 0 })
      .exec();
  }
}
