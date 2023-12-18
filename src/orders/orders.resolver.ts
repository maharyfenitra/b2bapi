import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './services/orders.service';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { OrderDetailsService } from './services/order-details.service';
import { OrderDetailsEntity } from './entities/order-details.entity';
import { OrderDetailsInput } from './dto/order-details.input';
import { CreateOrderDetailsInput } from './dto/create-order-details.input';

@Resolver(() => OrderEntity)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService, private readonly orderDetailsService: OrderDetailsService) { }

  @Mutation(() => OrderEntity)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    console.log(createOrderInput)
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [OrderEntity], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => OrderEntity, { name: 'findOrder' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Number)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    console.log(updateOrderInput);
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => OrderEntity)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.remove(id);
  }

  @Mutation(() => OrderDetailsEntity)
  createOrderDetails(@Args("orderDetails") orderDetails: CreateOrderDetailsInput) {
    return {

    }
  }
}
