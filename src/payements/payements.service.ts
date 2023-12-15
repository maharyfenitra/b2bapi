import { Injectable } from '@nestjs/common';
import { CreatePayementInput } from './dto/create-payement.input';
import { UpdatePayementInput } from './dto/update-payement.input';

@Injectable()
export class PayementsService {
  create(createPayementInput: CreatePayementInput) {
    return 'This action adds a new payement';
  }

  findAll() {
    return `This action returns all payements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payement`;
  }

  update(id: number, updatePayementInput: UpdatePayementInput) {
    return `This action updates a #${id} payement`;
  }

  remove(id: number) {
    return `This action removes a #${id} payement`;
  }
}
