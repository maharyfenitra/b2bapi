import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTraductionInput {
  @Field(() => String, { description: 'Traduction key' })
  key: string;

  @Field(() => String, { description: 'Lang' })
  lang: string;

  @Field(() => String, { description: 'Value' })
  value: string;

  @Field(() => String, { description: 'User who created the translation' })
  userId: string;
}
