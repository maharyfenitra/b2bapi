import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TranslationsService } from './translations.service';
import { Traduction } from './entities/translations.entity';
import { CreateTraductionInput } from './dto/create-traduction.input';
import { UpdateTraductionInput } from './dto/update-traduction.input';

@Resolver(() => Traduction)
export class TranslationsResolver {
  constructor(private readonly traductionService: TranslationsService) {}

  @Mutation(() => Traduction)
  createTraduction(@Args('createTraductionInput') createTraductionInput: CreateTraductionInput) {
    return this.traductionService.create(createTraductionInput);
  }

  @Query(() => [Traduction], { name: 'traduction' })
  findAll() {
    return this.traductionService.findAll();
  }

  @Query(() => Traduction, { name: 'traduction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.traductionService.findOne(id);
  }

  @Mutation(() => Traduction)
  updateTraduction(@Args('updateTraductionInput') updateTraductionInput: UpdateTraductionInput) {
    return this.traductionService.update(updateTraductionInput.id, updateTraductionInput);
  }

  @Mutation(() => Traduction)
  removeTraduction(@Args('id', { type: () => Int }) id: number) {
    return this.traductionService.remove(id);
  }
}
