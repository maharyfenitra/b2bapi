import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemEntity } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Resolver(() => ItemEntity)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => ItemEntity)
  async createItem(
    @Args('createItemInput') createItemInput: CreateItemInput,
  ): Promise<ItemEntity> {
    return await this.itemsService.create(createItemInput);
  }

  @Query(() => [ItemEntity], { name: 'items' })
  findAll() {
    return this.itemsService.findAll();
  }

  @Query(() => ItemEntity, { name: 'item' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => ItemEntity)
  updateItem(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return this.itemsService.update(updateItemInput.id, updateItemInput);
  }

  @Mutation(() => ItemEntity)
  async removeItem(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ItemEntity> {
    return await this.itemsService.remove(id);
  }
}
