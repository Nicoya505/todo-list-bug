import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { OwnerGuard } from 'src/auth/owner.guard';
import { IsPublic } from 'src/auth/is-public.decorator';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @HttpCode(HttpStatus.OK)
    @Get('')
    @IsPublic()
    async listTasks() {
        return this.tasksService.listTasks();
    }

    @HttpCode(HttpStatus.OK)
    @Get('/:id')
    @UseGuards( OwnerGuard)
    async getTask(@Param('id', ParseUUIDPipe) id: string) {
        return this.tasksService.getTask(id);
    }

    @HttpCode(HttpStatus.OK)
    @Put('/edit/:id')
    @UseGuards( OwnerGuard)
    async editTask(@Param('id') id: string ,@Body() body: UpdateTaskDto) {
        return this.tasksService.editTask(id, body);
    }
}
