import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './task.entity';
import { TaskService } from "./task.service";
@Controller('task')
export class TaskController {
    constructor(public taskServices: TaskService){}

    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.taskServices.getTaskById(id);
    }

    // @Post()
    // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    //     return 
    // }


}
