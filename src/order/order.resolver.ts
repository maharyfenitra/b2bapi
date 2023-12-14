import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderModele } from './order.modele';

@Resolver(of => OrderModele)
export class OrderResolver {

    constructor(orderService: OrderService){}
    @Query(returns => [OrderModele])
    orders(){
        return [
            {
                
            }
        ]
    }
}
