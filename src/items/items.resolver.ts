import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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

  @Query(() => [ItemEntity], { name: 'findAllitems' })
  findAll() {
    return this.itemsService.findAll();
  }

  @Query(() => ItemEntity, { name: 'findOneItem' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => ItemEntity)
  async updateItem(
    @Args('updateItemInput') updateItemInput: UpdateItemInput,
  ): Promise<ItemEntity> {
    const res = await this.itemsService.update(
      updateItemInput.id,
      updateItemInput,
    );
    return res;
  }

  @Mutation(() => ItemEntity)
  async removeItem(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ItemEntity> {
    return await this.itemsService.remove(id);
  }
}
