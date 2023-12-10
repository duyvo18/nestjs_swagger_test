import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

@Injectable()
export class UsersService {
  private readonly _users: Array<User> = [];

  async create(createUserDto: CreateUserDto): Promise<void> {
    var createUser = createUserDto as User;
    createUser.id = this._users.length.toString();
    this._users.push(createUser);
  }

  async update(id: string, userUpdateDto: UpdateUserDto): Promise<void> {
    var user: User = this._users.find((elem) => elem.id == id);

    user.fullname = userUpdateDto.fullname ?? user.fullname;
    user.gender = userUpdateDto.gender ?? user.gender;
    user.email = userUpdateDto.email ?? user.email;
    user.location = userUpdateDto.location ?? user.location;
    user.dietary = userUpdateDto.dietary ?? user.dietary;
    user.favorites = userUpdateDto.favorites ?? user.favorites;
  }

  async find(id: string): Promise<User> {
    return this._users.find((elem) => elem.id == id);
  }

  async findAll(): Promise<Array<User>> {
    return this._users;
  }
}
