import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CurrenciesService } from './currencies.service';
import { CurrencyEntity } from './entities/currency.entity';
import { CreateCurrencyInput } from './dto/create-currency.input';
import { UpdateCurrencyInput } from './dto/update-currency.input';

@Resolver(() => CurrencyEntity)
export class CurrenciesResolver {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Mutation(() => CurrencyEntity)
  createCurrency(
    @Args('createCurrencyInput') createCurrencyInput: CreateCurrencyInput,
  ) {
    return this.currenciesService.create(createCurrencyInput);
  }

  @Query(() => [CurrencyEntity], { name: 'currencies' })
  findAll() {
    return this.currenciesService.findAll();
  }

  @Query(() => CurrencyEntity, { name: 'currency' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.currenciesService.findOne(id);
  }

  @Mutation(() => CurrencyEntity)
  updateCurrency(
    @Args('updateCurrencyInput') updateCurrencyInput: UpdateCurrencyInput,
  ) {
    return this.currenciesService.update(
      updateCurrencyInput.id,
      updateCurrencyInput,
    );
  }

  @Mutation(() => CurrencyEntity)
  removeCurrency(@Args('id', { type: () => Int }) id: number) {
    return this.currenciesService.remove(id);
  }
}
