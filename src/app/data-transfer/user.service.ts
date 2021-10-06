import {Injectable} from '@angular/core';
import {User} from '../shared/models/user';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  userUrl: string = `https://localhost:44323/api/v1/User/`;

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Phương thức call api lấy dữ liệu người dùng
   * Author: NQMinh (02/10/2021)
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  /**
   * Phương thức call api lấy danh sách thành viên trong một phòng ban
   * @param departmentId
   * @returns
   * Author: NQMinh (06/10/2021)
   */
  getUsersByDepartment(departmentId: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}byDepartment?departmentId=${departmentId}`);
  }

  /**
   * Phương thức call api lấy danh sách thành viên trong một nhóm/dự án
   * @param projectId
   * @returns
   * Author: NQMinh (06/10/2021)
   */
  getUsersByProject(projectId: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}byProject?projectId=${projectId}`);
  }
}
