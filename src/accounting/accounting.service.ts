import { Injectable } from '@nestjs/common';
import { CreateAccountingInput } from './dto/create-accounting.input';
import { UpdateAccountingInput } from './dto/update-accounting.input';

@Injectable()
export class AccountingService {
  create(createAccountingInput: CreateAccountingInput) {
    return 'This action adds a new accounting';
  }

  findAll() {
    return `This action returns all accounting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accounting`;
  }

  update(id: number, updateAccountingInput: UpdateAccountingInput) {
    return `This action updates a #${id} accounting`;
  }

  remove(id: number) {
    return `This action removes a #${id} accounting`;
  }
}
