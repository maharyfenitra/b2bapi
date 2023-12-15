import { Injectable } from '@nestjs/common';
import { CreateDeviseInput } from './dto/create-devise.input';
import { UpdateDeviseInput } from './dto/update-devise.input';

@Injectable()
export class DeviseService {
  create(createDeviseInput: CreateDeviseInput) {
    return 'This action adds a new devise';
  }

  findAll() {
    return `This action returns all devise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devise`;
  }

  update(id: number, updateDeviseInput: UpdateDeviseInput) {
    return `This action updates a #${id} devise`;
  }

  remove(id: number) {
    return `This action removes a #${id} devise`;
  }
}
