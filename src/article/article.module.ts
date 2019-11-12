import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './schemas/article.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Article', schema: ArticleSchema}]),
        PassportModule.register({ defaultStrategy: 'jwt', session: false })],
    controllers: [ArticleController],
    exports: [ArticleService],
    providers: [ArticleService],
})
export class ArticleModule {}