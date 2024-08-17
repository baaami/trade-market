import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Contents } from "src/api/content/entities/content.entity";
import { Users } from "src/api/user/entities/user.entity";
import * as dotenv from "dotenv";
import { Favorites } from "src/common/entities/favorite.entity";
import { Reviews } from "src/api/review/entities/review.entity";
import { ProductImages } from "src/common/entities/productimage.entity";
import { Chats } from "src/events/chat/entities/chat.entity";
import { Rooms } from "src/events/chat/entities/room.entity";

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Contents, Users, Favorites, Reviews, ProductImages, Chats, Rooms],
  synchronize: true, // 한번 true한 뒤로는 무조건 false
  autoLoadEntities: true,
  charset: "utf8mb4",
  logging: false,
  keepConnectionAlive: true,
};

export = config;
