import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from "./task.repository";

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository) {}
        
    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id)
        if(!found) {
            throw new NotFoundException(`task id "${id}" not found`);
        }
        return found;
    }


}
