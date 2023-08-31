import { Body, Controller, Delete, Get, Inject, Logger, Param, Patch, Post } from "@nestjs/common";


@Controller('users')
export class UserController {

    constructor(private readonly restaurantService: RestaurantService)
    {

    }

    @Get()
    findAll(): Promise<any> {
        return this.restaurantService.getAll();
    }

    @Post()
    createRestaurant(@Body() createRestaurantDto : CreateRestaurantDto): Promise<RestaurantEntity> {
        return this.restaurantService.createRestaurant(createRestaurantDto);
    }

    @Patch(':id')
    updateRestaurant(@Param('id') id: string, @Body() updateRestaurantDto : UpdateRestaurantDto)
    {
        return this.restaurantService.updateRestaurant(id,updateRestaurantDto);
    }


    @Delete(':id')
    deleteRestaurant(@Param('id') id:string)
    {
        return this.restaurantService.deleteRestaurant(id);
    }
    
}