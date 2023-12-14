import { Field, Int, ObjectType} from "@nestjs/graphql"
import { DetailsOrderModele } from "./details.order.modele";

@ObjectType()
export class OrderModele {
    @Field(type => Int)
    id: number;

    @Field()
    num: string;

    @Field()
    client_id: number;

    @Field(type => [DetailsOrderModele])
    details: DetailsOrderModele[];

    @Field()
    date: Date;
}