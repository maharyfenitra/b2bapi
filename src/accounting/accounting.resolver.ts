import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountingService } from './accounting.service';
import { Accounting } from './entities/accounting.entity';
import { CreateAccountingInput } from './dto/create-accounting.input';
import { UpdateAccountingInput } from './dto/update-accounting.input';

@Resolver(() => Accounting)
export class AccountingResolver {
  constructor(private readonly accountingService: AccountingService) {}

  @Mutation(() => Accounting)
  createAccounting(@Args('createAccountingInput') createAccountingInput: CreateAccountingInput) {
    return this.accountingService.create(createAccountingInput);
  }

  @Query(() => [Accounting], { name: 'accounting' })
  findAll() {
    return this.accountingService.findAll();
  }

  @Query(() => Accounting, { name: 'accounting' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.accountingService.findOne(id);
  }

  @Mutation(() => Accounting)
  updateAccounting(@Args('updateAccountingInput') updateAccountingInput: UpdateAccountingInput) {
    return this.accountingService.update(updateAccountingInput.id, updateAccountingInput);
  }

  @Mutation(() => Accounting)
  removeAccounting(@Args('id', { type: () => Int }) id: number) {
    return this.accountingService.remove(id);
  }
}
