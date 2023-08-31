import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'restaurants'})
export class RestaurantEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}