import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './task.model';
import { TaskService } from "./task.service";
@Controller('task')
export class TaskController {
    constructor(public taskServices: TaskService){}

    @Get()
    getTask(){
        return this.taskServices.getTask();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return 
    }


}
