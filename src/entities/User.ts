import { BaseEntity, Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User extends BaseEntity<User, "id"> {

    @PrimaryKey()
    id: number;
  
}