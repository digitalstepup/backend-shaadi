import { Document } from 'mongoose';

export interface IEnquiry extends Document {
  readonly name: string;
}
