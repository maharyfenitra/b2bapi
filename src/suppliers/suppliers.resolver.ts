import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SuppliersService } from './suppliers.service';
import { SupplierEntity } from './entities/supplier.entity';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';

@Resolver(() => SupplierEntity)
export class SupplierResolver {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Mutation(() => SupplierEntity, { name: 'createSupplier' })
  async createSupplier(
    @Args('createSupplierInput') createSupplierInput: CreateSupplierInput,
  ): Promise<SupplierEntity> {
    return await this.suppliersService.create(createSupplierInput);
  }

  @Query(() => [SupplierEntity], { name: 'findAllSupplier' })
  async findAll(): Promise<SupplierEntity[]> {
    return await this.suppliersService.findAll();
  }

  @Query(() => SupplierEntity, { name: 'findOneSupplier' })
  async findOne(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<SupplierEntity> {
    return await this.suppliersService.findOne(id);
  }

  @Mutation(() => SupplierEntity)
  async updateSupplier(
    @Args('updateSupplierInput') updateSupplierInput: UpdateSupplierInput,
  ): Promise<SupplierEntity> {
    return await this.suppliersService.update(
      updateSupplierInput.id,
      updateSupplierInput,
    );
  }

  @Mutation(() => SupplierEntity)
  removeSupplier(@Args('id', { type: () => Int }) id: string) {
    return this.suppliersService.remove(id);
  }
}
