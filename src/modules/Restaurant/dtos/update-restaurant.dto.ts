import { IsString, } from "class-validator";

export class UpdateRestaurantDto {

    @IsString()
    name:string;
}