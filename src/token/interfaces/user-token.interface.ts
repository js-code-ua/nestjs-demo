import { Document } from 'mongoose';

export interface IUserToken extends Document {
  readonly token: string;
  readonly uId: string;
  readonly expireAt: string;
}
