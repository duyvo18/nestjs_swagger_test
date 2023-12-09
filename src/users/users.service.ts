import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    create(user: User) {
        this.users.push(user);
    }

    findAll(): Array<User> {
        return this.users;
    }
}