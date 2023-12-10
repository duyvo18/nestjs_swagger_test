import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

@Controller('users')
export class UsersController {
  constructor(private _usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this._usersService.create(createUserDto);
  }

  @Post(':id')
  async update(
    @Param() id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<void> {
    await this._usersService.update(id, updateUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this._usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this._usersService.find(id);
  }
}
