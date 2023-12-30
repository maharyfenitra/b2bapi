import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Traduction {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Traduction key' })
  key: string;

  @Field(() => String, { description: 'lang' })
  lang: string;

  @Field(() => String, { description: 'Value of traduction' })
  value: string;

  @Field(() => String, { description: 'User who created the translation' })
  userId: string;

  @Field()
  status: number;
}
