import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDetails } from '../schemas/order-details.schema';


@Injectable()
export class OrderDetailsService {

    constructor(@InjectModel(OrderDetails.name) private orderDetailsModel: Model<OrderDetails>) {}

    async createOrderDetails(details): Promise<any> {
        await new this.orderDetailsModel(details).save()
    }
}