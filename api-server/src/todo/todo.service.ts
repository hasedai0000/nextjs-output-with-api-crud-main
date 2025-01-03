import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async create(createTodoDto: CreateTodoDto) {
    return await this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        content: createTodoDto.content,
      },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        title: updateTodoDto.title,
        content: updateTodoDto.content,
      },
    });
  }
}
