import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { ErrorManager } from 'src/utils/error.manager';


@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly tasksRepository: Repository<Task>
    ) {}

    async listTasks() : Promise<Task[]>{
        try{
            const tasks: Task[] = await this.tasksRepository.find({
                relations: ['owner'],
              });

            if(tasks.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message: "No se encontraron resultados de tareas"
                })
            }
            return tasks;
        }catch(error){
            throw ErrorManager.createSginatureError(error.message);
        }
    }

    async getTask(taskId: string) : Promise<Task>{
        const task = await this.tasksRepository.findOne({
            where: { id: taskId },
            relations: ['owner'],
          });

        return task;
    }

    async editTask(id: string, body: UpdateTaskDto) : Promise<Task>{

        const task = await this.tasksRepository.findOne({where:{id}})

        if(!task){
            throw new NotFoundException(`La tarea con id ${id} no existe`)
        }

        await this.tasksRepository.update(id, body);

        const editedTask = await this.getTask(id);

        return editedTask;
    }
}
