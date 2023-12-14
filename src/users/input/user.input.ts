import { Field, Int, InputType} from "@nestjs/graphql"

@InputType()
export class UserInput {

    @Field({nullable: true})
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    password: string;

    @Field({nullable: true})
    type: string
}