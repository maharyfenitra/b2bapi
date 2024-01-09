import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SupplierResolver } from './suppliers.resolver';
import { SupplierSchema, Supplier } from './schemas/supplier.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplier.name, schema: SupplierSchema },
    ]),
  ],
  providers: [SupplierResolver, SuppliersService],
})
export class SuppliersModule {}
