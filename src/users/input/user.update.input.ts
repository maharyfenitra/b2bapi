import { Field, Int, InputType} from "@nestjs/graphql"

@InputType()
export class UserUpdateInput {

    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    lastName: string;

    @Field({nullable: true})
    password: string;

    @Field({nullable: true})
    type: string
}