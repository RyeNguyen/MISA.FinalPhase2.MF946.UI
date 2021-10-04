import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Department} from "../shared/models/department";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  departmentUrl: string = 'https://localhost:44323/api/v1/Departments/';

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Phương thức call api lấy danh sách phòng ban
   * Author: NQMinh (03/10/2021)
   */
  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentUrl);
  }

  /**
   * Phương thức call api lọc dữ liệu phòng ban và các dự án bên trong phòng ban
   * @param searchKeyword
   * @returns
   * Author: NQMinh (04/10/2021)
   */
  getFilteredDepartments(searchKeyword: string): Observable<object[]> {
    return this.http.get<object[]>(`${this.departmentUrl}search?searchKeyword=${searchKeyword}`);
  }

  /**
   * Phương thức call api thêm phòng ban mới vào cơ sở dữ liệu
   * @param newDepartment
   * Author: NQMinh (02/10/2021)
   */
  addNewDepartment(newDepartment: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentUrl, newDepartment, this.httpOptions);
  }
}
