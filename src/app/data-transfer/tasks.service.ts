import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MISATask} from "../shared/models/task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  taskUrl = `https://localhost:44323/api/v1/Tasks/`;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Phương thức call api lấy danh sách công việc theo nhóm/dự án
   * @param projectId
   * Author: NQMinh (02/10/2021)
   */
  getTasksByProject(projectId: string): Observable<MISATask[]> {
    const url = `${this.taskUrl}byProject?projectId=${projectId}`;
    return this.http.get<MISATask[]>(url);
  }

  /**
   * Phương thức call api sửa thông tin công việc
   * Author: NQMinh (04/10/2021)
   */
  updateTask(taskId: string, taskData: MISATask): Observable<MISATask> {
    return this.http.patch<MISATask>(`${this.taskUrl}${taskId}`, taskData, this.httpOptions);
  }
}
