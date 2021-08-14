import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';


export default {
    entities: [],
    metadataProvider: TsMorphMetadataProvider,
    user: "",
    password: "",
    dbName: "",
    debug: true,
    type: "postgresql"
} as Parameters<typeof MikroORM.init>[0];
