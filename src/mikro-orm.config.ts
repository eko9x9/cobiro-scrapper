import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import constant from "../utils/constant";
import { User } from "./entities/User";

export default {
    entities: [User],
    metadataProvider: TsMorphMetadataProvider,
    user: constant.DB.USER,
    password: constant.DB.PASS,
    dbName: constant.DB.NAME,
    port: parseInt(constant.DB.PORT),
    debug: true,
    type: "postgresql"
} as Parameters<typeof MikroORM.init>[0];