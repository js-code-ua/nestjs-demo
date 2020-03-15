import { Controller, Post, Body, ValidationPipe, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConfirmAccountDto } from './dto/confirm-account.dto';
import { SignInDto } from './dto/signin.dto';
import { IReadableUser } from 'src/user/interfaces/readable-user.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/signUp')
    async signUp(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<boolean> {
        return this.authService.signUp(createUserDto);
    }

    @Get('/confirm')
    async confirm(@Query(new ValidationPipe()) query: ConfirmAccountDto): Promise<boolean> {
        await this.authService.confirm(query.token);
        return true;
    }

    @Post('/signIn')
    async signIn(@Body(new ValidationPipe()) signInDto: SignInDto): Promise<IReadableUser> {
        return await this.authService.signIn(signInDto);
    }
}
