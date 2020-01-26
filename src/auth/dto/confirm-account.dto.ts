import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConfirmAccountDto {
    @IsNotEmpty()
    @ApiProperty()
    token: string;
}