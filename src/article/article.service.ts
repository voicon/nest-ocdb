import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticleService {

  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  async create(articleDto: ArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(articleDto);
    return await createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async find(id: string): Promise<Article[]> {
    return await this.articleModel.findById(id).exec();
  }

  async update(id: string, articleDto: ArticleDto): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, articleDto);
  }

  async delete(id: string, articleDto: ArticleDto): Promise<Article> {
    return await this.articleModel.findByIdAndRemove(id);
  }
}