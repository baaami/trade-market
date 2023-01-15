import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as ormconfig from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtMiddleWare } from './middleware/jwt.middleware';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { ContentModule } from './content/content.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { Users } from './user/entities/user.entity';
@Module({
  imports: [
    TestModule,
    ContentModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forRoot(ormconfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'upload'),
    }),
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  // TODO : include or exclude 확인
  configure(consumer: MiddlewareConsumer) {
    // consumer
    // .apply(JwtMiddleWare)
    // .exclude({ path: 'auth', method: RequestMethod.ALL})
    // .forRoutes({
    //   path: '*', // 특정 path 혹은 method에 대해서만 적용 시킬수도 있다.
    //   method: RequestMethod.ALL,           
    // })
  }
}
