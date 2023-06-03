import { ConfigModule } from "@nestjs/config";
import { User } from "../entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
})

const Databaseconfi: DataSourceOptions={
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHONIZE ==="true",
    logging: process.env.TYPEORM_LOGGIN ==="true",
    entities: [User],
    migrations: [__dirname + '/../migrations/*{.js,.ts}'],
}

class DataSourceFactory{
    private constructor(){ }
    static createDataSource(): DataSourceOptions{
        return Databaseconfi;
    }
}

const DataSourceConfig =DataSourceFactory.createDataSource();

export {DataSourceConfig}

export const AppDs = new DataSource(DataSourceConfig)