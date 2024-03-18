import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Enquiry {
  @Prop()
  name: string;
}

export const EnquirySchema = SchemaFactory.createForClass(Enquiry);
