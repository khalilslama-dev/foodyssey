import { Inject, Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { RestaurantEntity } from "../entities/restaurant.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRestaurantDto } from "../dtos/create-restaurant.dto";
import { UpdateRestaurantDto } from "../dtos/update-restaurant.dto";
import { RESTAURANT_REPOSITORY, RestaurantRepository } from "../repositories/restaurant.repository";

@Injectable()
export class RestaurantService{
    private restaurants: RestaurantEntity[] = [];

    constructor(
        @Inject(RESTAURANT_REPOSITORY) private readonly restaurantRepository: RestaurantRepository
        ){}

    getAll()
    {
        return this.restaurantRepository.query('select * from restaurants');
    }

    async createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<RestaurantEntity> {
        let newRestaurant = this.restaurantRepository.create({...createRestaurantDto});
        return await this.restaurantRepository.save(newRestaurant);
    }

    async updateRestaurant(id,updateRestaurantDto: UpdateRestaurantDto){
        return await this.restaurantRepository.save(updateRestaurantDto);
    }
    
    async deleteRestaurant(id)
    {
        return await this.restaurantRepository.delete(id);
    }
}