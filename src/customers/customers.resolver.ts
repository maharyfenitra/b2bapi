import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CustomerEntity } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Resolver(() => CustomerEntity)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => CustomerEntity)
  async createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ): Promise<CustomerEntity> {
    return await this.customersService.create(createCustomerInput);
  }

  @Query(() => [CustomerEntity], { name: 'findAllCustomers' })
  async findAll(): Promise<CustomerEntity[]> {
    return await this.customersService.findAll();
  }

  @Query(() => CustomerEntity, { name: 'findOneCustomer' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<CustomerEntity> {
    return await this.customersService.findOne(id);
  }

  @Mutation(() => CustomerEntity)
  async updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ): Promise<CustomerEntity> {
    return await this.customersService.update(
      updateCustomerInput.id,
      updateCustomerInput,
    );
  }

  @Mutation(() => CustomerEntity)
  async removeCustomer(
    @Args('id', { type: () => String }) id: string,
  ): Promise<CustomerEntity> {
    return await this.customersService.remove(id);
  }
}
