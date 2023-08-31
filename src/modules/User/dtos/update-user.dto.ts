import { IsString } from "class-validator";
import { IsNull } from "typeorm";

export class UpdateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

}