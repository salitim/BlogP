import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService extends TypeOrmCrudService<Comment> {
  constructor(@InjectRepository(Comment) repo) {
    super(repo);
  }
}       