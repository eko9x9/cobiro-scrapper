import { MikroORM, RequestContext } from "@mikro-orm/core";
import mikroOrmConfig from "../../src/mikro-orm.config";
import dotenv from "dotenv";
dotenv.config();

export default async(req: any, res: any, next: any) => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();
    RequestContext.create(orm.em, next);
}