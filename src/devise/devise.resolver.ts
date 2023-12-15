import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeviseService } from './devise.service';
import { Devise } from './entities/devise.entity';
import { CreateDeviseInput } from './dto/create-devise.input';
import { UpdateDeviseInput } from './dto/update-devise.input';

@Resolver(() => Devise)
export class DeviseResolver {
  constructor(private readonly deviseService: DeviseService) {}

  @Mutation(() => Devise)
  createDevise(@Args('createDeviseInput') createDeviseInput: CreateDeviseInput) {
    return this.deviseService.create(createDeviseInput);
  }

  @Query(() => [Devise], { name: 'devise' })
  findAll() {
    return this.deviseService.findAll();
  }

  @Query(() => Devise, { name: 'devise' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deviseService.findOne(id);
  }

  @Mutation(() => Devise)
  updateDevise(@Args('updateDeviseInput') updateDeviseInput: UpdateDeviseInput) {
    return this.deviseService.update(updateDeviseInput.id, updateDeviseInput);
  }

  @Mutation(() => Devise)
  removeDevise(@Args('id', { type: () => Int }) id: number) {
    return this.deviseService.remove(id);
  }
}
