import { Module } from "@nestjs/common";
import { RestaurantController } from "./controllers/restaurant.controller";
import { RestaurantService } from "./services/restaurant.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RestaurantEntity } from "./entities/restaurant.entity";
import { RESTAURANT_REPOSITORY, RestaurantRepository } from "./repositories/restaurant.repository";


@Module({
    imports: [TypeOrmModule.forFeature([RestaurantEntity])],
    providers: [RestaurantService,{provide: RESTAURANT_REPOSITORY, useClass: RestaurantRepository }],
    controllers: [RestaurantController],
    exports: [],
})
export class RestaurantModule {}    