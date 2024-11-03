import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class UpdateTaskDto{

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    done: boolean;

    @IsString()
    @IsNotEmpty()
    dueDate: string;

    
}