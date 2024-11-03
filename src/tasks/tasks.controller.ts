import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @HttpCode(HttpStatus.OK)
    @Get('')
    async listTasks() {
        return this.tasksService.listTasks();
    }

    @HttpCode(HttpStatus.OK)
    @Get('/:id')
    async getTask(@Param('id', ParseUUIDPipe) id: string) {
        return this.tasksService.getTask(id);
    }

    @HttpCode(HttpStatus.OK)
    @Put('/edit/:id')
    async editTask(@Param('id') id: string ,@Body() body: UpdateTaskDto) {
        return this.tasksService.editTask(id, body);
    }
}
