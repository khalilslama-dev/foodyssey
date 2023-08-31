import { Module } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { USER_REPOSITORY, UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService,{provide: USER_REPOSITORY, useClass: UserRepository }],
    controllers: [UserController],
    exports: [],
})
export class UserModule {}
