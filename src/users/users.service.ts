import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async create(body: CreateUserDto) : Promise<User>{
        const user = new User();
        user.email = body.email;
        user.pass = body.pass;
        user.fullname = body.fullname;

        await this.usersRepository.save(user);

        return plainToClass(User, user);
    }

    async findOne(email: string) : Promise<User>{
        const user = await this.usersRepository.findOneBy({
            email,
        });

        return user;
    }

    async getAll() : Promise<User[]>{
        const users: User[] = await this.usersRepository.find({});

        return users.map(user => plainToClass(User, user));
    }
}
