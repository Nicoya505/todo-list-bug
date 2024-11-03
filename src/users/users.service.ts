import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { plainToClass } from 'class-transformer';
import { ErrorManager } from 'src/utils/error.manager';

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

        try{

            const user = await this.usersRepository.findOneBy({
                email,
            });

            if(!user){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message: `No se encontro usuario con el email ${email}`
                })
            }
            return user;
        }catch(error){
            throw ErrorManager.createSginatureError(error.message);
        }
        
    }

    async getAll() : Promise<User[]>{

        try{

            const users: User[] = await this.usersRepository.find({});

            if(users.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message: "No se encontraron resultados de usuarios"
                })
            }
            //return users.map(user => plainToClass(User, user));
            return users;
        }catch(error){
            throw ErrorManager.createSginatureError(error.message);
        }
    }
}
