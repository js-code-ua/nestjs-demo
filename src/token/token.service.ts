import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserToken } from './interfaces/user-token.interface';
import { CreateUserTokenDto } from './dto/create-user-token.dto';
@Injectable()
export class TokenService {
    constructor(@InjectModel('Token') private readonly tokenModel: Model<IUserToken>) { }

    async create(createUserTokenDto: CreateUserTokenDto): Promise<IUserToken> {
        const userToken = new this.tokenModel(createUserTokenDto);
        return await userToken.save()
    }

    async delete(uId: string, token: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteOne({ uId, token })
    }

    async deleteAll(uId: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteMany({ uId });
    }

    async exists(uId: string, token: string): Promise<boolean> {
        return await this.tokenModel.exists({ uId, token });
    }
}
