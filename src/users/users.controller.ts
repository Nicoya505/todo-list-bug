import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { IsPublic } from 'src/auth/is-public.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @IsPublic()
    @HttpCode(HttpStatus.CREATED)
    @Post('/create')
    async create(@Body() body: CreateUserDto) {
        return this.usersService.create(body);
    }

    @IsPublic()
    @HttpCode(HttpStatus.OK)
    @Get()
    async getAll(){
        return this.usersService.getAll();
    }
}
