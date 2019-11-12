import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';
import { ArticleService } from './article.service';
import { Article } from './interfaces/article.interface';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/user.interface';
import { Usr } from './../users/user.decorator';

@Controller('article')
@UseGuards(AuthGuard())
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
        async create(@Body() articleDto: ArticleDto) {
        return this.articleService.create(articleDto);
    }

    @Get()
        async findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get('all')
    async findAll1(@Usr() user: User): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get(':id')
        async find(@Param('id') id: string, @Usr() user: User) {
            if(id === 'user') {
                return user.email;
            } else {
                return this.articleService.find(id);
            }
    }

    @Put(':id')
        async update(@Param('id') id: string, @Body() articleDto: ArticleDto) {
        return this.articleService.update(id, articleDto);
    }

    @Delete(':id')
        async delete(@Param('id') id: string, @Body() articleDto: ArticleDto) {
        return this.articleService.delete(id, articleDto);
    }
}