import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Profile {
  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  religion: string;

  @Prop()
  community: string;

  @Prop()
  email: string;

  @Prop()
  date_of_birth: string;
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);
