import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import dotenv from "dotenv";
dotenv.config();

const dbPort = process.env.DB_PORT || "5432";

export default {
    entities: [],
    metadataProvider: TsMorphMetadataProvider,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    port: parseInt(dbPort),
    debug: true,
    type: "postgresql"
} as Parameters<typeof MikroORM.init>[0];
