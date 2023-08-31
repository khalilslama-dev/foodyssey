import { Body, Controller, Delete, Get, Inject, Logger, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { UpdateUserDto } from "../dtos/update-user.dto";


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService )
    {

    }

    @Get()
    findAll(): Promise<any> {
        return this.userService.getAll();
    
    }

    @Post()
    createRestaurant(@Body() createRestaurantDto : CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createRestaurantDto);
    }

    @Patch(':id')
    updateRestaurant(@Param('id') id: string, @Body() updateRestaurantDto : UpdateUserDto)
    {
        return this.userService.updateUser(id,updateRestaurantDto);
    }


    @Delete(':id')
    deleteRestaurant(@Param('id') id:string)
    {
        return this.userService.deleteUser(id);
    }
    
}