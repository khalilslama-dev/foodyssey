import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/User/user.module';
import { RestaurantModule } from './modules/Restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './modules/Restaurant/entities/restaurant.entity';
import { SnakeNamingStrategy } from './strategies/snake-naming.strategies';

@Module({
  imports: [
    UserModule,
    RestaurantModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [RestaurantEntity],
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
