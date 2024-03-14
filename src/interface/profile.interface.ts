import { Document } from 'mongoose';

export interface IProfile extends Document {
  readonly name: string;
  readonly gender: string;
  readonly religion: string;
  readonly community: string;
  readonly email: string;
  readonly date_of_birth: string;
}
