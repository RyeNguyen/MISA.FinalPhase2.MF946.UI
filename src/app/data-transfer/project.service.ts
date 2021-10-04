import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "../shared/models/project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  projectUrl: string = 'https://localhost:44323/api/v1/Projects/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Phương thức call api lấy dữ liệu dự án qua ID
   * @param projectId
   * @returns
   * Author: NQMinh (04/10/2021)
   */
  getById(projectId: string): Observable<Project> {
    return this.http.get<Project>(`${this.projectUrl}${projectId}`);
  }

  /**
   * Phương thức call api thêm nhóm/dự án mới vào cơ sở dữ liệu
   * @param newProject
   * Author: NQMinh (03/10/2021)
   */
  addNewProject(newProject: Project): Observable<Project> {
    return this.http.post<Project>(this.projectUrl, newProject, this.httpOptions);
  }
}
