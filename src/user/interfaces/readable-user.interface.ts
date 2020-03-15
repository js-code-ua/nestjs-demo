import { IAddress } from './address.interface';

export interface IReadableUser {
    readonly email: string;
    status: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly gender: string;
    readonly address: IAddress;
    readonly profession: string;
    readonly phone: string;
    readonly roles: Array<string>;
    accessToken?: string;
}