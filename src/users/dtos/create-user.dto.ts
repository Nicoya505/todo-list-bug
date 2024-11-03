
import { IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto{
   
    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    pass: string;
}