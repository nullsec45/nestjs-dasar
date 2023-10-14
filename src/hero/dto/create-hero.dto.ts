import { IsNumber, IsNotEmpty, IsString, IsAlpha } from "class-validator";

export class CreateHeroDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsAlpha()
    name: string;

    @IsString()
    type: string;

    @IsString()
    image: string;
}