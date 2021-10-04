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

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Phương thức call api lấy dữ liệu người dùng
   * Author: NQMinh (02/10/2021)
   */
  getUsers(): Observable<User[]> {
    const url = 'https://localhost:44323/api/v1/User/';
    return this.http.get<User[]>(url);
  }
}
