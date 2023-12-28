import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeliveriesService } from './deliveries.service';
import { DeliveryEntity } from './entities/delivery.entity';
import { CreateDeliveryInput } from './dto/create-delivery.input';
import { UpdateDeliveryInput } from './dto/update-delivery.input';

@Resolver(() => DeliveryEntity)
export class DeliveriesResolver {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Mutation(() => DeliveryEntity)
  createDelivery(
    @Args('createDeliveryInput') createDeliveryInput: CreateDeliveryInput,
  ) {
    return this.deliveriesService.create(createDeliveryInput);
  }

  @Query(() => [DeliveryEntity], { name: 'deliveries' })
  findAll() {
    return this.deliveriesService.findAll();
  }

  @Query(() => DeliveryEntity, { name: 'delivery' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.deliveriesService.findOne(id);
  }

  @Mutation(() => DeliveryEntity)
  updateDelivery(
    @Args('updateDeliveryInput') updateDeliveryInput: UpdateDeliveryInput,
  ) {
    return this.deliveriesService.update(
      updateDeliveryInput.id,
      updateDeliveryInput,
    );
  }

  @Mutation(() => DeliveryEntity)
  async removeDelivery(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<DeliveryEntity> {
    return await this.deliveriesService.remove(id);
  }
}
