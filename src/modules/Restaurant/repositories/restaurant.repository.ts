import { DataSource, Repository } from "typeorm";
import { RestaurantEntity } from "../entities/restaurant.entity";
import { BaseRepository } from "src/shared/base.repository";
import { Injectable } from "@nestjs/common";

export const RESTAURANT_REPOSITORY = Symbol('RESTAURANT_REPOSITORY');
@Injectable()
export class RestaurantRepository extends BaseRepository<RestaurantEntity>{
        constructor(dataSource:DataSource){
            super(RestaurantEntity,dataSource); 
        }
}