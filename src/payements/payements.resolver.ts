import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PayementsService } from './payements.service';
import { Payement } from './entities/payement.entity';
import { CreatePayementInput } from './dto/create-payement.input';
import { UpdatePayementInput } from './dto/update-payement.input';

@Resolver(() => Payement)
export class PayementsResolver {
  constructor(private readonly payementsService: PayementsService) {}

  @Mutation(() => Payement)
  createPayement(
    @Args('createPayementInput') createPayementInput: CreatePayementInput,
  ) {
    return this.payementsService.create(createPayementInput);
  }

  @Query(() => [Payement], { name: 'payements' })
  findAll() {
    return this.payementsService.findAll();
  }

  @Query(() => Payement, { name: 'payement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.payementsService.findOne(id);
  }

  @Mutation(() => Payement)
  updatePayement(
    @Args('updatePayementInput') updatePayementInput: UpdatePayementInput,
  ) {
    return this.payementsService.update(
      updatePayementInput.id,
      updatePayementInput,
    );
  }

  @Mutation(() => Payement)
  removePayement(@Args('id', { type: () => Int }) id: number) {
    return this.payementsService.remove(id);
  }
}
