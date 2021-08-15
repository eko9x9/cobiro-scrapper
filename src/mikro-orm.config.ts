import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import constant from "utils/constant";

const dbPort = process.env.DB_PORT || "5432";

export default {
    entities: [],
    metadataProvider: TsMorphMetadataProvider,
    user: constant.DB.USER,
    password: constant.DB.PASS,
    dbName: constant.DB.NAME,
    port: parseInt(constant.DB.PORT),
    debug: true,
    type: "postgresql"
} as Parameters<typeof MikroORM.init>[0];