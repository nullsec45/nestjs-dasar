import { IsEmail, IsString } from "class-validator";

export class AuthDto {
    @IsString()
    @IsString()
    email: string

    @IsString()
    password: string;
}