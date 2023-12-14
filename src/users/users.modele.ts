import { Field, Int, ObjectType} from "@nestjs/graphql"

@ObjectType()
export class UserModele {
    @Field(type => String)
    id?: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    password: string;

    @Field({nullable: true})
    type?: string
}