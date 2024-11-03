import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
  } from '@nestjs/common';
  import { TasksService } from '../tasks/tasks.service'; 

  @Injectable()
  export class OwnerGuard implements CanActivate {
    constructor(private readonly tasksService: TasksService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const user = request.user; 
      const taskId = request.params.id; 
  
      
      const task = await this.tasksService.getTask(taskId);
  
      if (!task) {
        throw new ForbiddenException('Tarea no encontrada');
      }
  
      
      if (task.owner.id !== user.id) {
        throw new ForbiddenException('No tienes permiso para realizar esta acción.');
      }
  
      return true; 
    }
  }
  