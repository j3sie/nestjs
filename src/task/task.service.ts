import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    getTask(){
        return 'here from services';
    }
    createTask(task){

    }

}
