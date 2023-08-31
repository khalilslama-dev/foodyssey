import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { USER_REPOSITORY, UserRepository } from "../repositories/user.repository";
import { DeleteResult } from "typeorm";

@Injectable()
export class UserService {

    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: UserRepository) {}

    async deleteUser(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
    async updateUser(id: string, updateRestaurantDto: UpdateUserDto) {
        return await this.userRepository.save(updateRestaurantDto);
    }
    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        return await this.userRepository.save(createUserDto);
    }
    async getAll(): Promise<UserEntity[]> {
        return await this.userRepository.query('select * from users');
    }

}