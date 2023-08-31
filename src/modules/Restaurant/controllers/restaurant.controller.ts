import { Body, Controller, Delete, Get, Inject, Logger, Param, Patch, Post } from "@nestjs/common";
import { RestaurantService } from "../services/restaurant.service";
import { Observable, of } from "rxjs";
import { RestaurantEntity } from "../entities/restaurant.entity";
import { CreateRestaurantDto } from "../dtos/create-restaurant.dto";
import { UpdateRestaurantDto } from "../dtos/update-restaurant.dto";


@Controller('restaurants')
export class RestaurantController {

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