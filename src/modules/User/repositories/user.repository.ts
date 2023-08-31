import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { BaseRepository } from "src/shared/base.repository";

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {

    constructor(dataSource:DataSource)
    {
        super(UserEntity,dataSource);
    }

}