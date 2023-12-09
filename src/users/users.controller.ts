import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'Returns all users.';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `Returns ${id} user.`;
  }

  @Post(':user')
  create(@Param('user') user: any): string {
    console.log(user);
    return 'Create new user.';
  }
}
