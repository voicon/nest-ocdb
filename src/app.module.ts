import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ArticleModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://admin:myadminpassword@10.219.12.70:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
