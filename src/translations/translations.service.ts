import { Injectable } from '@nestjs/common';
import { CreateTraductionInput } from './dto/create-traduction.input';
import { UpdateTraductionInput } from './dto/update-traduction.input';

@Injectable()
export class TranslationsService {
  create(createTraductionInput: CreateTraductionInput) {
    return 'This action adds a new traduction';
  }

  findAll() {
    return `This action returns all traduction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} traduction`;
  }

  update(id: number, updateTraductionInput: UpdateTraductionInput) {
    return `This action updates a #${id} traduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} traduction`;
  }
}
