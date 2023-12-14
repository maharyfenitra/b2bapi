import { Field, Int, ObjectType} from "@nestjs/graphql"

@ObjectType()
export class DetailsOrderModele {
    @Field(type => Int)
    order_id: number;

    @Field()
    item_id: string;

    @Field()
    quantity: number;

}