import { IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class CreateAddressDto {
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly country: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly city: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly addressLine1: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly addressLine2: string;
}