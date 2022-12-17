import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ITask,
  ITaskTypeOption,
  ITypePercentage,
} from '../interface/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpclient: HttpClient) {}

  getTaskList(): Observable<Array<ITask>> {
    return this.httpclient
      .get<Array<ITask>>('http://localhost:8081/api/v1/Tarefa')
      .pipe(map((d: Array<ITask>) => d));
  }
  postTaskList(task: ITask): Observable<ITask> {
    return this.httpclient
      .post<ITask>('http://localhost:8081/api/v1/Tarefa', task)
      .pipe(map((d: ITask) => d));
  }

  updateTask(task: ITask, id: string): Observable<ITask> {
    return this.httpclient
      .put<ITask>(`http://localhost:8081/api/v1/Tarefa/${id}`, task)
      .pipe(map((d: ITask) => d));
  }
  deleteTask(id: string) {
    return this.httpclient.delete(`http://localhost:8081/api/v1/Tarefa/${id}`);
  }

  getTaskById(id: string): Observable<ITask> {
    return this.httpclient
      .get<ITask>(`http://localhost:8081/api/v1/Tarefa/${id}`)
      .pipe(map((d: ITask) => d));
  }

  getTypePercentage(): Observable<Array<ITypePercentage>> {
    return this.httpclient
      .get<Array<ITypePercentage>>(`http://localhost:8081/api/v1/task/vData/getPercentageGroupByTipo`)
      .pipe(map((d: Array<ITypePercentage>) => d));
  }

  getTypeOptions(): Array<ITaskTypeOption> {
    return [{ type: 'done' }, { type: 'todo' }, { type: 'pending' }];
  }
}
